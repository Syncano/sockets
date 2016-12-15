var _ = require('lodash');
if (inputs.array.length === 0) {
  return exits.emptyArray();
}
return exits.success(_.sample(inputs.array));