var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
  return doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.fbUserId, '/adaccounts'].join(""),
  data: {
    'access_token': inputs.accessToken,
  },
  headers: {},
}, function (error, responseBody) {
  if (error) {
    return exits.error(error);
  }
  return exits.success(responseBody);
});