var util = require('util');
var _ = require('lodash');
var Http = require('machinepack-http');

var cityStateOrCountry;
if (inputs.stateOrCountry) {
  cityStateOrCountry = inputs.city + ',' + inputs.stateOrCountry;
} else {
  cityStateOrCountry = inputs.city;
}

Http.sendHttpRequest({
  baseUrl: 'http://api.openweathermap.org',
  url: '/data/2.5/weather',
  method: 'get',
  params: {
    api_key: inputs.apiKey,
    q: cityStateOrCountry
  }
}).exec({
  success: function(httpResponse) {
    // Parse response body and build up result.
    var responseBody;
    try {
      responseBody = JSON.parse(httpResponse.body);

      if (responseBody.cod === '404') {
        return exits.noCityFound('No City Found.');
      }

      return exits.success(responseBody);
    } catch (e) {
      return exits.error('Unexpected response from the OpenWeather API:
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