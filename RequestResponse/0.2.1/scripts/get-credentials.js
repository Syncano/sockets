// Import `lodash`.
var _ = require('lodash');

// Import `basic-auth`.
var dougsBasicAuthParser = require('basic-auth');

// If we don't have a request object in our `env` (or if it somehow doesn't know how to read request headers),
// then bail through the `error` exit.
if (!_.isObject(env.req) || !_.isFunction(env.req.get)) {
  return exits.error(new Error('A valid Sails/Express request object must be provided through `.setEnv()` in order to use this machine.'));
}

var credentials = dougsBasicAuthParser(env.req);

if (!_.isObject(credentials)) {
  credentials = {
    name: '',
    pass: ''
  };
}

return exits.success({
  username: credentials.name,
  password: credentials.pass,
});