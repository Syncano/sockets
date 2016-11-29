var request = require('request');

// Base url for API requests.
var BASE_URL = 'https://mandrillapp.com/api/1.0';

request.post({
  url: BASE_URL + '/templates/list.json',
  form: {
    key: inputs.apiKey
  },
  json: true
}, function(err, response, httpBody) {
  if (err) {
    return exits(err);
  }
  else if (response.statusCode >= 300||response.statusCode <200) {
    return exits.error(httpBody);
  }
  else if (typeof httpBody !== 'object' || httpBody.status==='error') {
    return exits.error(httpBody);
  }
  else {
    return exits.success(httpBody);
  }
});