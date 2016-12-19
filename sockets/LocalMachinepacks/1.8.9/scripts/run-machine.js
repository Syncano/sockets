// Dependencies
var _ = require('lodash');
var Machines = require('machinepack-machines');


// Require the machinepack
var mp;
try {
  mp = require(inputs.machinepackPath);
}
catch (e) {
  return exits.error(e);
}

// Look up the appropriate machine instance
var machineInstance;
_.each(mp, function (_machine, methodName) {
  if (_machine.identity === inputs.identity) {
    machineInstance = _machine;
  }
});
if (!machineInstance) {
  return exits.notFound();
}

// Now run the instantiated machine using the provided input values.
Machines.runInstantiatedMachine({
  machineInstance: machineInstance,
  inputValues: inputs.inputValues
}).exec({
  error: exits.error,
  cantStringifyOutput: exits.cantStringifyOutput,
  unknownInput: exits.unknownInput,
  success: exits.success
});