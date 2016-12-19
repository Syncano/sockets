var Http = require('machinepack-http');
var qs = require('qs');

var queryString = qs.stringify(inputs);
var url = 'https://api.pipl.com/search/v4/?' + queryString;

Http.sendHttpRequest({
  url: url,
  method: 'get'
}).exec({
  // OK.
  success: function(result) {
    return exits.success(result.body);
  },
  error: function(err) {
    if (err) return exits.error(err);
  },
  // 404 status code returned from server
  notFound: function(result) {
    if (err) return exits.error(err);
  },
  // 400 status code returned from server
  badRequest: function(result) {
    return exits.error('Something was wrong with your HTTP request (' + result.status + ').');
  },
  // 403 status code returned from server
  forbidden: function(result) {
    return exits.apiKeyProblem('Invalid or unprovided API key (403).');
  },
  // 401 status code returned from server
  unauthorized: function(result) {
    return exits.apiKeyProblem('Invalid or unprovided API key (401).');
  },
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: function(result) {
    result.machineMessage = 'Something went wrong on the other end (' + result.status + ').';
    return exits.error(result);
  },
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: function() {
    return exits.error('Could not send or receive the HTTP request.');
  }
});