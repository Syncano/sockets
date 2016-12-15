// Dependencies
var request = require('request');

var url = inputs.controller + '/v1/apps/' + inputs.app + '/config';

var headers = {
  'content-type': 'application/json',
  'X-Deis-Version': 1,
  'Authorization': 'token ' + inputs.token
};

// Make the HTTP request
request.get({ url: url, headers: headers, json: true }, function(err, response, body) {
  if(err) return exits.error(err);

  var code = response.statusCode;
  if(!code) return exits.error(new Error('Missing status code'));

  if(code > 499) return exits.error(code);
  if(code > 299) return exits.notAuthenticated();

  var values = {};
  values.memory = body.memory && body.memory.memory || 'unlimited';
  values.cpu = body.cpu && body.cpu.cpu || 'unlimited';

  return exits.success(values);
});