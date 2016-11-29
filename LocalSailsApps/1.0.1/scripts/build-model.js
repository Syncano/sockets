var _ = require('lodash');
var Javascript = require('machinepack-javascript');
var Machine = require('machine');

// Only a little transformation is needed -- we need to create a dictionary
// out of the attributes array.

var code = _.cloneDeep(inputs.modelDef);
code.attributes = _.reduce(code.attributes, function(memo, attr) {
  memo[attr.name] = _.cloneDeep(attr);
  delete memo[attr.name].name;
  delete memo[attr.name].description;
  return memo;
}, {});
delete code.primaryKey;
return exits.success(Javascript.beautify({code: JSON.stringify(code)}).execSync());