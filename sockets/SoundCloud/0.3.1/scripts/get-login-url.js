var util = require('util');
var url = 'https://soundcloud.com/connect';
inputs.scope = inputs.scope || [];

// Generate a semi-random string to use for the state
var state = (Math.random() + 1).toString(36).substring(7);

try {
  return exits.success(util.format(
    'https://soundcloud.com/connect?client_id=%s&redirect_uri=%s&response_type=%s&scope=%s&state=%s',
    inputs.clientId, inputs.callbackUrl, inputs.responseType, inputs.scope, state
  ));
}
catch(e) {
  return exits.error(e);
}