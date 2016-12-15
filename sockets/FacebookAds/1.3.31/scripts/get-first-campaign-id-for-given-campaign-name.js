var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adAccountId, '/adcampaign_groups'].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : 'name'
  },
  headers: {},
},
function (err, responseBody) {
  if (err) { return exits.error(err); }
  for (var i in responseBody.data) {
    if (responseBody.data[i].name == inputs.adCampaignName) {
        return exits.success(responseBody.data[i].id);
    }
    }
  return exits.error('no campaign found by that name');
});