var util = require('util');
var _ = require('lodash');
var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.stlouisfed.org',
  url: '/fred/series/observations',
  method: 'get',
  params: {
    api_key: inputs.apiKey,
    series_id: inputs.seriesId,
    file_type: inputs.fileType,
    observation_start: inputs.observationStart,
    observation_end: inputs.observationEnd
  }
}).exec({
  success: function(httpResponse) {

    // Parse response body and build up result.
    var responseBody;
    try {
      responseBody = JSON.parse(httpResponse.body);
      return exits.success(responseBody.observations);
    } catch (e) {
       return exits.error('Unexpected response from FRED API:
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