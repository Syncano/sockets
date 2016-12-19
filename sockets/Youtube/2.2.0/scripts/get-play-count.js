var util = require('util');
var _ = require('lodash');
var Machine = require('machine');
var Http = require('machinepack-http');

// The Youtube API URL setup
var BASE_URL = Machine.build(require('./get-base-url')).execSync();

// Get the id of the video from the URL
var videoId = Machine.build(require('./parse-video-id')).configure({
  url: inputs.url
}).execSync();

Http.sendHttpRequest({
  baseUrl: BASE_URL,
  method: 'get',
  url: '/videos',
  params: {
    part: 'contentDetails,statistics',
    id: videoId,
    key: inputs.apiKey
  }
}).exec({
  // OK.
  success: function(httpResponse) {

    // Parse response body and build up result.
    var responseBody;
    var result;
    try {
      responseBody = JSON.parse(httpResponse.body);
      result = {
        viewCount: responseBody.items[0].statistics.viewCount,
        likeCount: responseBody.items[0].statistics.likeCount
      };
    } catch (e) {
      return exits.error('Unexpected response from YouTube API:
'+util.inspect(responseBody, false, null)+'
Parse error:
'+util.inspect(e));
    }

    return exits.success(result);

  },
  // Non-2xx status code returned from server
  notOk: function(httpResponse) {

    try {
      var responseBody = JSON.parse(httpResponse.body);
      if (httpResponse.status === 403 && _.any(responseBody.error.errors, {
          reason: 'rateLimitExceeded'
        })) {
        return exits.rateLimitExceeded();
      }
      // Unknown youtube error
      return exits.error(httpResponse);
    } catch (e) {
      return exits.error('Unexpected response from YouTube API:
'+util.inspect(responseBody, false, null)+'
Parse error:
'+util.inspect(e));
    }

  },
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  }
});