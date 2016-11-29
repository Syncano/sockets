// Dependencies
var request = require('request');

var url = inputs.controller + '/v1/apps/' + inputs.app + '/config';

var headers = {
  'content-type': 'application/json',
  'X-Deis-Version': 1,
  'Authorization': 'token ' + inputs.token
};

var target = inputs.limit || 'memory';
if(['memory', 'cpu'].indexOf(target) < 0) {
  setImmediate(function() {
    exits.invalidLimit();
  });
  return;
}

var body = {
  app: inputs.app
};

var values = {};
values[target] = inputs.value;

body[target] = JSON.stringify(values);

// Make the HTTP request
request.post({ url: url, form: body, headers: headers, json: true }, function(err, response, body) {
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