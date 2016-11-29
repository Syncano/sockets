var path = require('path');
var isFunction = require('lodash.isfunction');
var isObject = require('lodash.isobject');
var fsx = require('fs-extra');

// Check for the methods we need on the provided Readable source stream.
if (!isObject(inputs.sourceStream) || !isFunction(inputs.sourceStream.pipe) || !isFunction(inputs.sourceStream.on)) {
  return exits.error(new Error('Invalid stream provided (has no `.pipe()` and/or `.on()` methods).'));
}

// Ensure path is absolute (resolve from cwd if not).
inputs.destination = path.resolve(inputs.destination);

// Only override an existing file if `inputs.force` is true.
fsx.exists(inputs.destination, function(exists) {
  if (exists && !inputs.force) {
    return exits.alreadyExists();
  }

  // Delete existing files and/or directories if necessary.
  (function _deleteExistingFilesAndOrDirsIfNecessary(next) {
    if (!exists) {
      return next();
    }
    else {
      fsx.remove(inputs.destination, next);
    }
  })(function afterwards(err){
    if (err) { return exits(err); }

    // Build the write drain (i.e. "write stream").
    // This is where the content will go.
    var writeDrain = fsx.createOutputStream(inputs.destination);

    // Pipe the source stream down the drain.
    //
    // Note that since we're using `createOutputStream()`, the necessary
    // directory hierarchy leading to the destination will be created if
    // it does not already exist.
    inputs.sourceStream.pipe(writeDrain);

    // Handle write errors.
    // (note that errors on the source Readable stream are the
    //  responsibility of the provider of said stream)
    var hasAlreadyCalledExit;
    writeDrain.on('error', function (err){
      // If we have not called one of our exits yet, then this is
      // our first error.  So we'll handle it by calling the
      // appropriate exit.
      if (!hasAlreadyCalledExit) {
        hasAlreadyCalledExit = true;
        return exits.error(err);
      }
      // Otherwise this is a subsequent error.  Since we've already
      // called an exit, there is not a whole lot else we can do.
      // So we just ignore it.
      // (we need to keep this handler bound or an error will be
      //  thrown, potentially crashing the process)
    });

    // When finished...
    writeDrain.once('finish', function (){
      if (hasAlreadyCalledExit) { return; }
      hasAlreadyCalledExit = true;
      return exits.success();
    });
  });//</after _deleteExistingFilesAndOrDirsIfNecessary>
});//</fsx.exists()>