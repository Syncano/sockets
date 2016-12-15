var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'https://teamtreehouse.com',
  url: '/' + inputs.username + '.json',
  method: 'get'
}).exec({
  error: function(err) {
    return exits.error('An unexpected error occured.');
  },

  notFound: function(result) {
    return exits.notFound('Treehouse profile not found.');
  },

  success: function(result) {
    var responseBody;

    try {
      responseBody = JSON.parse(result.body);
    } catch(e) {
      return exits.error('An error occurred while parsing the body.');
    }

    return exits.success(responseBody);
  }
});