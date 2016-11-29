var path = require('path');
var spawn = require('child_process').spawn;
var isUndefined = require('lodash.isundefined');

// First, build up the options to pass in to `child_process.spawn()`.
var childProcOpts = {};

// Determine the appropriate `cwd` for `child_process.spawn()`.
if (isUndefined(inputs.dir)) {
  // Default directory to current working directory
  childProcOpts.cwd = process.cwd();
}
else {
  // (or if a `dir` was specified, resolve it to make sure
  //  it's an absolute path.)
  childProcOpts.cwd = path.resolve(inputs.dir);
}

// If `environmentVars` were provided, pass them in to `child_process.exec()`.
if (!isUndefined(inputs.environmentVars)) {
  childProcOpts.env = inputs.environmentVars;
}

// Then spawn the child process and set up a no-op error listener to prevent crashing.
var liveChildProc = spawn(inputs.command, inputs.cliArgs, childProcOpts);
liveChildProc.on('error', function wheneverAnErrorIsEmitted(err){ /* ... */ });

// Return live child process.
return exits.success(liveChildProc);