// Dependencies
var request = require('request');

var url = inputs.controller + '/v1/apps/' + inputs.app + '/config';

var headers = {
  'content-type': 'application/json',
  'X-Deis-Version': 1,
  'Authorization': 'token ' + inputs.token
};

var body = {
  app: inputs.app
};

var values = {};
inputs.values.forEach(function(item) {
  values[item.key.toUpperCase()] = item.value;
});

// Attach the stringified values dictionary onto the body
body.values = JSON.stringify(values);

// Make the HTTP request
request.post({ url: url, form: body, headers: headers, json: true }, function(err, response, body) {
  if(err) return exits.error(err);

  var code = response.statusCode;
  if(!code) return exits.error(new Error('Missing status code'));
  if(code > 499) return exits.error(code);
  if(code > 299) return exits.notAuthenticated();

  var values = Object.keys(body.values || {}).map(function(key) {
    return { name: key, value: body.values[key] };
  });

  return exits.success(values);
});