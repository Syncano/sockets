var URL = require('url');
var QS = require('querystring');
var _ = require('lodash');
var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.klout.com/v2/identity.json/twitter?screenName=' + inputs.twitterScreenName + '&key=' + inputs.apiKey,
  url: '',
  method: 'get',
}).exec({
  // OK.
  success: function(result) {

    try {
      var responseBody = JSON.parse(result.body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }

    return exits.success(responseBody.id);

  },
  // Non-2xx status code returned from server
  notOk: function(result) {

    try {
      if (result.status === 403) {
        return exits.wrongOrNoKey("Invalid or unprovided API key. All calls must have a key.");
      }
    } catch (e) {
      return exits.error(e);
    }

  },
  // An unexpected error occurred.
  error: function(err) {

    exits.error(err);
  },
});