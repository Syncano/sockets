var path = require('path');
var executeCmdInChildProc = require('child_process').exec;
var isObject = require('lodash.isobject');
var isUndefined = require('lodash.isundefined');

// First, build up the options to pass in to `child_process.exec()`.
var childProcOpts = {};

// Determine the appropriate `cwd` for `child_process.exec()`.
if (isUndefined(inputs.dir)) {
  // Default directory to current working directory
  childProcOpts.cwd = process.cwd();
}
else {
  // (or if a `dir` was specified, resolve it to make sure
  //  it's an absolute path.)
  childProcOpts.cwd = path.resolve(inputs.dir);
}

// If `timeout` was provided, pass it in to `child_process.exec()`.
// Note that we also track a timestamp (epoch ms) for use in negotiating errors below.
var timestampBeforeExecutingCmd;
if (!isUndefined(inputs.timeout)) {
  if (inputs.timeout < 1) {
    return exits.error('Invalid timeout (`'+inputs.timeout+'`).  Must be greater than zero.  Remember: `timeout` should be used to indicate the maximum number of miliseconds to wait for this command to finish before giving up.');
  }
  childProcOpts.timeout = inputs.timeout;
  timestampBeforeExecutingCmd = (new Date()).getTime();
}

// If `environmentVars` were provided, pass them in to `child_process.exec()`.
if (!isUndefined(inputs.environmentVars)) {
  childProcOpts.env = inputs.environmentVars;
}



// Now spawn the child process.
var liveChildProc = executeCmdInChildProc(inputs.command, childProcOpts, function onClose(err, bufferedStdout, bufferedStderr) {
  if (err) {
    if (!isObject(err)) {
      return exits.error(err);
    }
    // console.log('err=>',err);
    // console.log('keys=>',Object.keys(err));
    // console.log('err.code=>',err.code);
    // console.log('err.killed=>',err.killed);
    // console.log('err.syscall=>',err.syscall);
    // console.log('err.errno=>',err.errno); // e.g. 127 || 'ENOENT'
    // console.log('err.signal=>',err.signal); // e.g. 'SIGTERM'

    // `err.syscall.match(/spawn/i)` should be true as well, but not testing since
    // Node v0.12 changed this a bit and we want to future-proof ourselves if possible.
    if (err.code==='ENOTDIR') {
      return exits.notADir();
    }
    if (err.code==='ENOENT') {
      return exits.noSuchDir();
    }
    if (err.code==='EACCES') {
      return exits.forbidden();
    }

    // Check to see if this error is because of the configured timeout.
    if (err.signal==='SIGTERM' && inputs.timeout) {
      var msElapsed = (new Date()).getTime() - timestampBeforeExecutingCmd;
      if (msElapsed >= inputs.timeout) {
        return exits.timedOut();
      }
    }
    return exits.error(err);
  }

  // console.log('Child process exited with exit code ' + code);
  return exits.success({
    stdout: bufferedStdout,
    stderr: bufferedStderr
  });
});