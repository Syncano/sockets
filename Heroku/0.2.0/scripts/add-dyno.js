// Require the Http pack so we can make requests
var Http = require('machinepack-http');

// Set the dyno command and size if provided,
// or use reasonable defaults.
var params = {
  command: inputs.command || 'bash',
  size: inputs.size || '1X'
};

// Set the env overrides if provided
if (inputs.environment) {
  params.overrides = {
    env: inputs.environment
  };
}

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  url: 'apps/' + inputs.app + '/dynos',
  baseUrl: 'https://api.heroku.com/',
  method: 'post',
  params: params,
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