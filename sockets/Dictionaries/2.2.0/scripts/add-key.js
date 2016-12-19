var _ = require('lodash');

if (!inputs.force && !_.isUndefined(inputs.dictionary[inputs.newKey])) {
  return exits.keyAlreadyExists();
}
inputs.dictionary[inputs.newKey] = inputs.value;
return exits.success(inputs.dictionary);