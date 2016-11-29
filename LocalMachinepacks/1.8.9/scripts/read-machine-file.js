var Path = require('path');
var _ = require('lodash');
var machinePath = Path.resolve(process.cwd(), inputs.source);

// console.log(' •-> Reading machine file located @', machinePath);

// Clear the machine out of the require cache, in case it's been modified.
delete require.cache[machinePath];

// TODO:
// psuedo-"sandbox" the require of this machine
// (not a real sandbox, just enough to reasonably catch weird stuff during development)
var machineDef;
try {
  machineDef = _.cloneDeep(require(machinePath));

  // TODO:
  // validate that no code exists outside module.exports
}
catch(e){
  // Look for MODULE_NOT_FOUND error from Node core- but make sure it's a require error
  // from the actual module itself, and not one of its dependencies! To accomplish that-
  // check that the error message string ends in `/package.json'` (note the trailing apostrophe)
  if (e.code === 'MODULE_NOT_FOUND' && typeof e.message==='string' && e.message.match(new RegExp(machinePath))) {
    return exits.notFound(e);
  }
  return exits.error(e);
}

machineDef = require('rttc').dehydrate(machineDef, {allowNull: true});

// (TODO: clean up function signature first.)

// Encode as json
var jsonMachineDefinition;
try {
  jsonMachineDefinition = JSON.stringify(machineDef);
}
catch (e) {
  return exits.couldNotStringify(e);
}

return exits.success(jsonMachineDefinition);