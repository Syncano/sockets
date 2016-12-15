//var URL = require('url');
//var QS = require('querystring');
//var _ = require('lodash');
var Http = require('machinepack-http');
var _ = require('underscore');

Http.sendHttpRequest({
  baseUrl: 'http://api.glassdoor.com/api/api.htm?format=json&v=1&action=employers'
  + '&t.p=' + inputs.partnerId
  + '&t.k=' + inputs.partnerKey
  + '&userip=' + inputs.userIp
  + '&useragent=' + inputs.userAgent
  + '&q=' + inputs.q
  + '&l=' + inputs.l,
  url: '',
  method: 'get'
}).exec({
  // OK.
  success: function (result) {

    try {
      var responseBody = JSON.parse(result.body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }

    if (!responseBody.success) {
      return exits.error('API call failed');
    }
    if (!responseBody.response || !responseBody.response.employers) {
      return exits.error('No companies found');
    }

    var found = false;

    responseBody.response.employers.forEach(function (employer, index) {
      if (employer.exactMatch == true) {
        found = true;
        return exits.success(employer);
      }
    });

    if (!found) {
      return exits.error('No exact match');
    }

  },
  // Non-2xx status code returned from server
  notOk: function (result) {

    try {
      if (result.status === 403) {
        return exits.error("Invalid or unprovided API key. All calls must have a key.");
      }
    } catch (e) {
      return exits.error(e);
    }

  },
  // An unexpected error occurred.
  error: function (err) {

    exits.error(err);
  }
});