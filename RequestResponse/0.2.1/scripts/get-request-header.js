// Import `lodash`.
var _ = require('lodash');

// If we don't have a request object in our `env`, bail through the `error` exit.
if (!_.isObject(env.req) || !_.isFunction(env.req.get)) {
  return exits.error(new Error('A valid Sails/Express request object must be provided through `.setEnv()` in order to use this machine.'));
}

// Get the value of the specified header and return it
// through the `success` exit.
var headerVal = env.req.get(inputs.header);
return exits.success(headerVal);