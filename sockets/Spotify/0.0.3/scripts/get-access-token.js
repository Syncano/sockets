var request = require('request'); // "Request" library

var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(inputs.clientId + ':' + inputs.clientSecret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Return token to access the Spotify Web API
    return exits.success(body.access_token);
  } else {
    return exits.error(error)
  }
});