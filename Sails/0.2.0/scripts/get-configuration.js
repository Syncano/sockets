// Import `lodash`.
var _ = require('lodash');

// Ensure `env.sails`, returning through the `error` exit
// if it cannot be found or is not an object.
if (!_.isObject(env.sails)) {
  return exits.error(new Error('No Sails application object could be found in the machine environment!'));
}

// Check whether the sails config has the specified key.
if (!_.has(env.sails.config, inputs.key)) {
  // If not, return through the `noSuchConfig` exit.
  return exits.noSuchConfig();
}

// Retrieve the specified configuration value.
var value = _.get(env.sails.config, inputs.key);

// Return it through the `success` exit.
return exits.success(value);