var request = require('request');

request.get({
  url: 'https://api.soundcloud.com/me.json',
  qs: {
    'oauth_token': inputs.accessToken
  },
  json: true,
  headers: {}
}, function(err, response, body) {
   if (err) {
    return exits.error(err);
  }
  if (response.statusCode > 299 || response.statusCode < 200) {
    return exits.error(response.statusCode);
  }

   // Parse profile data from the response body
    try {
      return exits.success(body);
    }
    catch (e) {
      return exits.error(e);
    }
});