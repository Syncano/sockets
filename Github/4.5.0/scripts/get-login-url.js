var util = require('util');
var url = 'https://github.com/login/oauth/authorize';
inputs.scope = inputs.scope || [];

// Generate a semi-random string to use for the state
var state = (Math.random() + 1).toString(36).substring(7);

try {
  return exits.success(util.format(
    'https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s',
    inputs.clientId, inputs.callbackUrl, inputs.scope.join(','), state
  ));
}
catch(e) {
  return exits.error(e);
}