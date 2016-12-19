var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: 'https://api.smartystreets.com/street-address',
  method: 'get',
  params: {
    'auth-id': inputs.authId,
    'auth-token': inputs.authToken,
    input_id: inputs.input_id,
    street: inputs.street,
    street2: inputs.street2 || '',
    secondary: inputs.secondary || '',
    city: inputs.city || '',
    state: inputs.state || '',
    zipcode: inputs.zipcode || '',
    lastline: inputs.lastline || '',
    addressee: inputs.addressee || '',
    urbanization: inputs.urbanization || '',
    candidates: inputs.candidates || 10
  },
  headers: {
    'Content-Type': 'application/json'
  }
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
  // 404 status code returned from server
  notFound: function(result) {
    var json = JSON.parse(result.body);
    return exits.error(json);
  },
  // 400 status code returned from server
  badRequest: function(result) {
    var json = JSON.parse(result.body);
    return exits.error(json);
  },
  // 403 status code returned from server
  forbidden: function(result) {
    var json = JSON.parse(result.body);
    return exits.error(json);
  },
  // 401 status code returned from server
  unauthorized: function(result) {
    var json = JSON.parse(result.body);
    return exits.error(json);
  },
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: function(result) {
    var json = JSON.parse(result.body);
    return exits.error(json);
  },
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: function() {
    return exits.error('Unexpected connection error; could not send or receive HTTP request.');
  },
  // OK.
  success: function(result) {
    var json = JSON.parse(result.body);
    return exits.success(json);
  }
});