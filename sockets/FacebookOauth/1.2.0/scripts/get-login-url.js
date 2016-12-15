var util = require('util');

inputs.permissions = inputs.permissions || ['email', 'public_profile', 'user_friends'];

try {
  return exits.success(util.format(
    'https://www.facebook.com/dialog/oauth?client_id=%s&redirect_uri=%s&scope=%s',
    inputs.appId, inputs.callbackUrl, inputs.permissions.join(',')
  ));
}
catch(e) {
  return exits.error(e);
}