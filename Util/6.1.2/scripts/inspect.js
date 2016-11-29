var util = require('util');
var isError = require('lodash.iserror');
var isObject = require('lodash.isobject');

if (isError(inputs.value)) {
  return exits.success(util.inspect(inputs.value.stack));
}
if (isObject(inputs.value)) {
  return exits.success(util.inspect(inputs.value, {depth: null}));
}
return exits.success(util.inspect(inputs.value));