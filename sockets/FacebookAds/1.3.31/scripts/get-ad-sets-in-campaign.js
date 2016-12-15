var doJSONRequest = require('../lib/do-request');
var fields = inputs.fields || 'adcampaigns{id,campaign_group_id,campaign_status,daily_budget,lifetime_budget,name,stats}';
var data = {
  'access_token': inputs.accessToken,
  'fields': fields
};
if (inputs.queries) {
  for (var i in inputs.queries) {
    data[i] = inputs.queries[i];
  }
}
// GET ad accounts/ and send the api token as a header
doJSONRequest({
    method: 'get',
    url: ['/v2.3/', inputs.adCampaignGroupId].join(""),
    data: data,
    headers: {},
  },
  function(err, responseBody) {
    if (err) {
      return exits.error(err);
    }

    var myJson = responseBody.adcampaigns;
    var newArray = [];
    var len = myJson.data.length;
    for (var i = 0; i < len; i++) {
      newArray.push({
        'id': myJson.data[i].id,
        'name': myJson.data[i].name,
        'campaign_group_id': myJson.data[i].campaign_group_id,
        'daily_budget': myJson.data[i].daily_budget,
        'lifetime_budget': myJson.data[i].lifetime_budget,
        'campaign_status': myJson.data[i].campaign_status,
        'stats': myJson.data[i].stats
      });
    }
    responseBody = newArray;
    return exits.success(responseBody);
  });