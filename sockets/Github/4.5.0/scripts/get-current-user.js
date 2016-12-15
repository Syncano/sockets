var Http = require('machinepack-http');

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  baseUrl: 'https://api.github.com',
  url: '/user',
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'token ' + inputs.accessToken,
    'User-Agent': 'MachinePack'
  },
}).exec({

  success: function(response) {
    // Parse data from the response body
    try {
      var data = JSON.parse(response.body);
      return exits.success(data);
    }
    catch (e) {
      return exits.error(e);
    }

  },

  error: function(err) {
    return exits.error(err);
  }
});