var request = require('request');

request.post({
  url: 'https://api.soundcloud.com/oauth2/token',
  json: {
    client_id: inputs.clientId,
    client_secret: inputs.clientSecret,
    grant_type: inputs.grantType || 'authorization_code',
    code: inputs.code,
    redirect_uri: inputs.callbackUrl
  },
  headers: {}
}, function(err, response, body) {
    if (err) {
      return exits.error(err);
    }

    if (response.statusCode > 299 || response.statusCode < 200) {
      return exits.error(response.statusCode);
    }

    // Parse AccessToken from the response body
    try {
      //var data = JSON.parse(body);
      //console.log(body);
      //var accessToken = response.access_token;
      return exits.success({
        token: body.access_token,
        scope: body.scope
      });
    }
    catch (e) {
      return exits.error(e);
    }
});