var util = require('util');
var isObject = require('lodash.isobject');
var isString = require('lodash.isstring');
var MPJSON = require('machinepack-json');

// If this is a dictionary/array, then JSON stringify it.
var val = inputs.value;
if (isObject(val)) {
  val = MPJSON.stringifySafe({value:val}).execSync();
}
// Otherwise, cast it to a string.
else {
  val = val+'';
}

if (!isString(val)) {
  return exits.couldNotSerialize();
}

// Now escape the resulting string as a CLI option.
val = val.replace(/'/g,'\'\\\'\'');

return exits.success(val);