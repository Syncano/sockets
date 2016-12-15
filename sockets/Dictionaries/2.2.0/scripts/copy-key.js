var _ = require('lodash');

var value = inputs.dictionary[inputs.originalKey];
if (_.isUndefined(value)) {
  return exits.noSuchKey();
}

var force = _.isUndefined(inputs.force) ? true : inputs.force;
if (!force && !_.isUndefined(inputs.dictionary[inputs.newKey])) {
  return exits.keyAlreadyExists();
}

inputs.dictionary[inputs.newKey] = value;
return exits.success(inputs.dictionary);