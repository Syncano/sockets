// Require the Http pack so we can make requests
var Http = require('machinepack-http');

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  url: 'apps',
  baseUrl: 'https://api.heroku.com/',
  method: 'get',
  params: {},
  headers: {
    Accept: 'application/vnd.heroku+json; version=3',
    Authorization: 'Bearer ' + inputs.apiToken
  },
}).exec({
  success: function(result) {
    return exits.success(result);
  },
  // An unexpected error occurred.
  error: exits.error,
  // 404 status code returned from server
  notFound: exits.error,
  // 400 status code returned from server
  badRequest: exits.error,
  // 403 status code returned from server
  forbidden: exits.error,
  // 401 status code returned from server
  unauthorized: exits.error,
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: exits.error,
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: exits.error
});