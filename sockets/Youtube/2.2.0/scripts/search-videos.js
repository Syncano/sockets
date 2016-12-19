var util = require('util');
var _ = require('lodash');
var Machine = require('machine');
var Http = require('machinepack-http');

// If specified `limit` must be between 1 and 50.
if (!_.isUndefined(inputs.limit) && (inputs.limit > 50 || inputs.limit < 1)) {
  return exits.error('Input value for `limit` should be a number between 1 and 50.');
}

Http.sendHttpRequest({
  baseUrl: Machine.build(require('./get-base-url')).execSync(),
  method: 'get',
  url: '/search',
  params: {
    part: 'id,snippet',
    type: 'video',
    q: inputs.query,
    maxResults: inputs.limit || 5,
    key: inputs.apiKey
  }
}).exec({

  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },

  // OK.
  success: function(httpResponse) {

    // Parse response body and build up result.
    var responseBody;
    var result;
    try {
      responseBody = JSON.parse(httpResponse.body);
      result = _.reduce(responseBody.items, function (memo, video){

        // Omit results with no video id
        // (i.e. when the type is something other than youtube#video)
        if (!video.id.videoId) {
          return memo;
        }
        memo.push({
          id: video.id.videoId,
          url: 'https://youtube.com/watch?v='+video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          publishedAt: video.snippet.publishedAt
        });
        return memo;
      }, []);
    }
    catch (e) {
      return exits.error('Unexpected response from YouTube API:
'+util.inspect(responseBody, false, null)+'

Parse error:
'+util.inspect(e));
    }

    return exits.success(result);

  }

});