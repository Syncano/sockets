var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
return doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adAccountId, '/adcampaign_groups'].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : 'name'
  },
  headers: {},
}, function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});