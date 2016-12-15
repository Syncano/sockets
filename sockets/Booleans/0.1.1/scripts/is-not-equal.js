// Import `lodash`.
var _ = require('lodash');

// If the two input values are semantically equal, return `false`
// through the `success` exit.
if (_.isEqual(inputs.a, inputs.b)) {
  return exits.success(false);
}

// Otherwise return `true` through the `success` exit.
return exits.success(true);