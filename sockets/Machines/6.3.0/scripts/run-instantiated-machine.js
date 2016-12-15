// Dependencies
var util = require('util');
var _ = require('lodash');
var async = require('async');


// Configure machine with input values
var machineInstance = inputs.machineInstance((function (){
  // Compress all the provided input values into the simple object
  // format you would normally use when configuring a machine.
  return _.reduce(inputs.inputValues, function (memo, configuredInput) {

    var inputDef = inputs.machineInstance.inputs[configuredInput.name];

    // If `inputDef` does not exist, then `configuredInput.name` is wrong.
    if (!inputDef) {
      var _err = new Error('Configured input `'+configuredInput.name+'` does not correspond with a real input in this machine.');
      _err.exit = 'unknownInput';
      throw _err;
    }

    memo[configuredInput.name] = configuredInput.value;

    // console.log('for %s, got: %s, a %s',configuredInput.name, memo[configuredInput.name], typeof memo[configuredInput.name]);

    return memo;
  }, {});
})());

// Build an empty `exitsTraversed` array that will track which exit was traversed,
// and its return value (if applicable).
var exitsTraversed = [ /* e.g. {
  returnValue: {some: 'stuff'}
  exitName: 'whateverExit'
} */ ];

// Loop through each of the machine's declared exits and set up
// a handler for it so we know which exit was traversed.
var callbacks = {};
_.each(machineInstance.exits, function (exitDef, exitName){
  callbacks[exitName] = function (result){
    exitsTraversed.push({
      returnValue: result,
      exitName: exitName
    });

    if (exitsTraversed.length > 1) {
      // This should never happen (log a warning)
      console.warn('Invalid machine; exited multiple times:', exitsTraversed);
    }
  };
});

// Now start executing the machine
machineInstance.exec(callbacks);

// And set up a `whilst` loop that checks to see if the machine has
// halted every 50ms.
//
// (we can safely do this AFTER calling .exec() on the machine since we know there
  //  will always be at least a setTimeout(0) before the `fn` runs-- compare with
  //  `.execSync()`, where we wouldn't have such a guarantee)
async.whilst(
  function check() {
    return exitsTraversed.length < 1;
  },
  function lap(next){
    setTimeout(function (){
      next();
    }, 25);
  },
  function afterwards(err) {
    if (err) return exits.error(err);

    // Build up result metadata obj
    var whatHappened = {
      outcome: exitsTraversed[0].exitName,
      output: exitsTraversed[0].returnValue,
      inspectedOutput: (function (){
        var rawReturnValue = exitsTraversed[0].returnValue;
        // Send back the `stack` property if this is an error instance
        // (don't worry about util.inspecting it)
        if (_.isError(rawReturnValue)) {
          return rawReturnValue.stack;
        }
        return util.inspect(rawReturnValue, false, null);
      })(),
      duration: machineInstance._msElapsed
    };

    // Attempt to stringify return value
    try {
      whatHappened.jsonStringifiedOutput = JSON.stringify(exitsTraversed[0].returnValue);
    }
    catch (e){
        // If it doesnt work, call the `cantStringifyOutput` exit with all of the
        // other result metadata that we were able to put together.
      return exits.cantStringifyOutput(whatHappened);
    }

    // Otherwise we call `success`.
    return exits.success(whatHappened);
  }
);