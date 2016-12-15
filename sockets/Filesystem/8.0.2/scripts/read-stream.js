var path = require('path');
var fs = require('fs');

// In case we ended up here w/ a relative path,
// resolve it using the process's CWD
inputs.source = path.resolve(inputs.source);

// Set up a simple flag as a local variable (`alreadyExited`) which will serve
// as a spinlock to ensure this machine fn does not exit more than once.
var alreadyExited;

// Now create the read stream.  This is synchronous, but it also doesn't tell us
// whether or not the file at the specified source path actually exists, or whether
// we can access that path, etc.  That's all up to the machine which consumes this
// stream to figure out.
var file__ = fs.createReadStream(inputs.source);

// Bind a no-op handler for the `error` event to prevent it from crashing the process if it fires.
// (userland code can still bind and use its own error events)
file__.on('error', function noop (err) { });
// ^ Since event handlers are garbage collected when the event emitter is itself gc()'d, it is safe
// for us to bind this event handler here.


// Also bind a one-time error handler specifically to catch a few specific errors that can
// occur up-front.
file__.once('error', function (err) {
  // When receiving subsequent read errors on this Readable stream after
  // the first (or after we've exited successfully), the best we can do
  // is remain silent.
  if (alreadyExited) {
    // Note that in the future, we could expose an optional input
    // (e.g. `onUnexpectedError`) which accepts a notifier function that
    // could be called in this scenario.
    return;
  }

  if (err.code === 'ENOENT') {
    alreadyExited = true;
    return exits.doesNotExist();
  }

  // If any other sort of miscellaneous error occurs... (as long as we haven't exited yet)
  alreadyExited = true;
  return exits.error(err);
});


// Now wait for the file to be opened...
file__.once('open', function (fd){

  // Once the file is open, use the file descriptor (`fd`) to transactionally ensure that it is not
  // a directory using `fstat`. Why do we have to do this?  Well, even if this is a directory, it can
  // still be _OPENED_ just fine-- but the first time you try to read it... BAM. Check out @modchan's
  // SO answer at http://stackoverflow.com/a/24471971/486547 for more details & analysis.
  fs.fstat(fd, function (err, stats) {
    if (alreadyExited) {return;}

    if (err) {
      alreadyExited = true;
      return exits.error(err);
    }

    if (stats.isDirectory()) {
      alreadyExited = true;
      return exits.isDirectory();
    }

    alreadyExited = true;
    return exits.success(file__);
  }); //</fstat()>
}); //</on open>