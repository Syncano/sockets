var isObject = require('lodash.isobject');
var isFunction = require('lodash.isfunction');

// Validate that the provided child process instance is at least close to the real deal.
if (!isObject(inputs.childProcess) || !isFunction(inputs.childProcess.kill) || !isFunction(inputs.childProcess.on) || !isFunction(inputs.childProcess.removeListener)) {
  return exits.invalidChildProcess();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For posterity: The difference between SIGKILL, SIGTERM, and SIGINT:
//
// • SIGKILL
//   ° Like running `kill -9`.
//   ° Can't listen for this, because it kills the process before you have a chance to do anything.
//
// • SIGTERM   (recommended)
//   ° Like running `kill`.
//   ° Allows graceful shutdown.
//
// • SIGINT
//   ° Like hitting CTRL+C.
//   ° Allows graceful shutdown.
//
// > The above was based on the great explanation at https://www.exratione.com/2013/05/die-child-process-die/#considering-unix-signals.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Set up some variables for use below.
// (they need to be declared up here so they can reach each other)
var forceKillOrGiveUp;
var handleClosingChildProc;
var timer;

// Define a function (`forceKillOrGiveUp`) that will be called if the graceful shutdown attempt fails.
forceKillOrGiveUp = function (){
  try {
    inputs.childProcess.removeListener('close', handleClosingChildProc);

    if (inputs.forceIfNecessary) {
      inputs.childProcess.kill('SIGKILL');
      return exits.success(true);
    }
    else {
      return exits.couldNotKill();
    }
  }
  catch (e) {
    return exits.error(e);
  }
};

// Define a function (`handleClosingChildProc`) that will be called when/if we receive a message
// indicating that the child process has closed.
handleClosingChildProc = function (code, signal) {
  if (signal === 'SIGKILL') {
    // Ignore SIGKILL
    // (if we're seeing it here, it came from somewhere else, and we don't want to get confused)
    return;
  }
  clearTimeout(timer);

  // Graceful kill successful!
  return exits.success(false);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// > After a couple of hours of testing with both Node v4.3.0 and v5.4.0, my conclusion is that this
// > optimization is a no-go for now (the `connected` flag doesn't appear to be reliable for this use case).
// > That said, the commented-out section below will stay, and it can be brought back at the time we figure
// > out a better way to do this; or if the behavior of Node core changes.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // If the child process is not "connected", then don't even bother trying to signal
// // it to close gracefully (b/c it won't work).  Instead, just go ahead and either
// // force-kill it or give up, depending on the `forceIfNecessary` input.
// // (for more information about `connected`, see: https://nodejs.org/api/child_process.html#child_process_child_connected)
// if (!inputs.childProcess.connected) {
//   return forceKillOrGiveUp();
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Listen for the child process being closed.
inputs.childProcess.on('close', handleClosingChildProc);

// Set a timer.
// (If the child process has not closed gracefully after `inputs.maxMsToWait`,
//  then we need to either force kill it with SIGKILL, or fail via the
//  `couldNotKill` exit.)
timer = setTimeout(forceKillOrGiveUp, inputs.maxMsToWait);


// Now attempt to kill the child process gracefully (send SIGTERM).
inputs.childProcess.kill();