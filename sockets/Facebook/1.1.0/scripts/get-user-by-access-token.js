var doJSONRequest = require('../lib/do-request');

// GET projects/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: '/v2.1/me',
  data: {
    'access_token': inputs.accessToken
  },
  headers: {},
}, function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});