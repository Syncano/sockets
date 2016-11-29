// Dependencies
var request = require('request');

var url = inputs.controller + '/v1/auth/login/';
var body = {
  username: inputs.username,
  password: inputs.password,
  sslVerify: inputs.sslVerify || false
};

// Make the HTTP request
request.post({ url: url, form: body, json: true }, function(err, response, body) {
  if(err) return exits.error(err);

  var code = response.statusCode;
  if(!code) return exits.error(new Error('Missing status code'));
  if(code > 299) return exits.notAuthenticated();

  var token = body.token;
  if(!token) return exits.notAuthenticated();

  return exits.success(token);
});