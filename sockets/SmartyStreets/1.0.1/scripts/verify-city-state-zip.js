var Http = require('machinepack-http');

if (!inputs.city && !inputs.state && !inputs.zipcode) {
  return exits.missingParams();
}
if (inputs.city && (!inputs.state && !inputs.zipcode)) {
  return exits.cityAlone();
}

var city = inputs.city || '';
var state = inputs.state || '';
var zipcode = inputs.zipcode || '';

Http.sendHttpRequest({
  url: 'https://api.smartystreets.com/zipcode',
  method: 'get',
  params: {
    'auth-id': inputs.authId,
    'auth-token': inputs.authToken,
    input_id: inputs.input_id,
    city: inputs.city || '',
    state: inputs.state || '',
    zipcode: inputs.zipcode || ''
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
    return exits.error(result);
  },
  // 400 status code returned from server
  badRequest: function(result) {
    return exits.error(result);
  },
  // 403 status code returned from server
  forbidden: function(result) {
    return exits.error(result);
  },
  // 401 status code returned from server
  unauthorized: function(result) {
    return exits.error(result);
  },
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: function(result) {
    return exits.error(result);
  },
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: function() {
    return exits.error('Unexpected connection error; could not send or receive HTTP request.');
  },
  // OK.
  success: function(result) {
    var json = JSON.parse(result.body);
    console.log(json[0]);
    // Input that doesn't yield a match is returned with a status and reason:
    if (json[0].status || json[0].reason) {
      var status = json[0].status;
      var reason = json[0].reason;
      switch (status) {
        case 'blank':
          return exits.blank(json);
          break;
        case 'invalid_state':
          return exits.invalidState(json);
          break;
        case 'invalid_city':
          return exits.invalidCity(json);
          break;
        case 'invalid_zipcode':
          return exits.invalidZipcode(json);
          break;
        case 'conflict':
          return exits.conflict(json);
          break;
      }
    }
    return exits.success(json);
  }
});