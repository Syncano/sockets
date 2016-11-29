var _ = require('lodash');

if (inputs.start < 0) {
  return exits.error('`start` index must be least zero.');
}
if (_.isUndefined(inputs.end)) {
  return exits.success(inputs.string.slice(inputs.start));
}

if (inputs.end < 0) {
  return exits.error('`end` index must be least zero.');
}
// Increment `end` by 1 (since the third arg to `_.slice` is exclusive)
return exits.success(inputs.string.slice(inputs.start, inputs.end+1));