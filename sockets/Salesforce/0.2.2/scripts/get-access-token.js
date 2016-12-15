var oauth2 = require('salesforce-oauth2');

oauth2.authenticate({
  redirect_uri: inputs.callbackUrl,
  client_id: inputs.consumerKey,
  client_secret: inputs.consumerSecret,
  code: inputs.code
}, function(err, payload) {

  if (err) {
    return exits.error(err);
  }

  var options = {
    url: payload.id,
    headers: {
      'Authorization': payload.token_type + " " + payload.access_token
    }
  };

  return exits.success(payload);

});