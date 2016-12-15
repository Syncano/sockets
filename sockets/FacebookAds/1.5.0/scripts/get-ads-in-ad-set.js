var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
return doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adCampaignId, '/adgroups' ].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : 'id,stats'
  },
  headers: {},
},
function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});