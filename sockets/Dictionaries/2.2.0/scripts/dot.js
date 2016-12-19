var _ = require('lodash');

var value = _.get(inputs.dictionary, inputs.keypath);
if (_.isUndefined(value)) {
  return exits.noSuchKey();
}
return exits.success(value);