var _ = require('lodash');

if (inputs.start < 0) {
  return exits.error('`start` index must be least zero.');
}
if (typeof inputs.end === 'undefined') {
  return exits.success(_.slice(inputs.array, inputs.start));
}

if (inputs.end < 0) {
  return exits.error('`end` index must be least zero.');
}
// Increment `end` by 1 (since the third arg to `_.slice` is exclusive)
return exits.success(_.slice(inputs.array, inputs.start, inputs.end+1));