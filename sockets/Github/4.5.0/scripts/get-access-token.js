var Http = require('machinepack-http');

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  baseUrl: 'https://github.com',
  url: '/login/oauth/access_token',
  method: 'post',
  params: {
    'client_id': inputs.clientId,
    'client_secret': inputs.clientSecret,
    'code': inputs.code,
    'redirect_uri': inputs.callbackUrl
  },
  headers: {
    'Accept': 'application/json'
  },
}).exec({

  success: function(response) {

    // Parse AccessToken from the response body
    try {
      var data = JSON.parse(response.body);

      if(data.error) {
        if(data.error === 'redirect_uri_mismatch') return exits.redirectUriMismatch();
        if(data.error === 'bad_verification_code') return exits.badVerificationCode();
        if(data.error === 'incorrect_client_credentials') return exits.incorrectClientCredentials();
      }

      if(!data.access_token) {
        return exits.error(data);
      }

      var accessToken = data.access_token;
      return exits.success({ token: accessToken });
    }
    catch (e) {
      return exits.error(e);
    }

  },

  error: function(err) {
    return exits.error(err);
  }
});