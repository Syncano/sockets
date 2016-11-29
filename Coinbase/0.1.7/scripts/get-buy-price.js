var util = require('util');
var _ = require('lodash');
var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'https://coinbase.com',
  url: '/api/v1/prices/buy',
  method: 'get',
  params: {
    qty: inputs.quantity || '1'
  }
}).exec({
  success: function(httpResponse) {
    // Parse response body and build up result.
    var responseBody;
    try {
      responseBody = JSON.parse(httpResponse.body);

      return exits.success(responseBody);
    } catch (e) {
      return exits.error('Unexpected response from the Coinbase API:
' + util.inspect(responseBody, false, null) + '
Parse error:
' + util.inspect(e));
    }
  },
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  }
});