var util = require('util');
var url = 'https://accounts.spotify.com';
inputs.scope = inputs.scope || [];

// Generate a semi-random string to use for the state
var state = (Math.random() + 1).toString(36).substring(7);

try {
  return exits.success(util.format(
    'https://accounts.spotify.com/authorize/?client_id=%s&response_type=%s&redirect_uri=%s&scope=%s&state=%s',
    inputs.clientId, inputs.responseType, inputs.redirectUri, inputs.scope, state
  ));
}
catch(e) {
  return exits.error(e);
}