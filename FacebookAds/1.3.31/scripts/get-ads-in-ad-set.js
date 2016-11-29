var doJSONRequest = require('../lib/do-request');
var fields = inputs.fields || 'id,stats,name,adgroup_status';
// GET ad accounts/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adCampaignId, '/adgroups' ].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : fields
  },
  headers: {},
},
function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});