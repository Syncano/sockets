var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.fbUserId, '/adaccounts'].join(""),
  data: {
    'access_token': inputs.accessToken,
  },
  headers: {},
}, function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});