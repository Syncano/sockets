var _ = require('lodash');

if (_.isEqual(inputs.a, inputs.b)) {
  return exits.success();
}
return exits.otherwise();