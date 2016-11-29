var _ = require('lodash');
if (_.isUndefined(inputs.dictionary[inputs.key])){
  return exits.noSuchKey();
}
delete inputs.dictionary[inputs.key];
return exits.success(inputs.dictionary);