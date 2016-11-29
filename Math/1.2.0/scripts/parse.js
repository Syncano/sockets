var _ = require('lodash');
if (_.isNaN(+inputs.string)) {
  return exits.notANumber();
}
return exits.success(inputs.string);