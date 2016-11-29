// Import `lodash`.
var _ = require('lodash');

// Ensure `env.sails`, returning through the `error` exit
// if it cannot be found or is not an object.
if (!_.isObject(env.sails)) {
  return exits.error(new Error('No Sails application object could be found in the machine environment!'));
}

// Return whether or not the environment is 'production'
// through the `success` exit.
return exits.success(env.sails.config.environment === 'production');