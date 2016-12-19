var oauth2 = require('salesforce-oauth2');
var util = require('util');

var uri = oauth2.getAuthorizationUrl({
  redirect_uri: inputs.callbackUrl,
  client_id: inputs.consumerKey
    // scope: 'api'
});

return exits.success(uri);