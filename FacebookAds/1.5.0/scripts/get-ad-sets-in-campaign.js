var doJSONRequest = require('../lib/do-request');

// GET ad accounts/ and send the api token as a header
return doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adCampaignGroupId ].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : 'adcampaigns{id,daily_budget,campaign_status,stats}'
  },
  headers: {},
},
function (err, responseBody) {
  if (err) { return exits.error(err); }

  var myJson = responseBody.adcampaigns;
  var newArray = [];
  var len = myJson.data.length;
  console.log(myJson.data.length);
  for (var i=0; i<len; i++){
    newArray.push({
      'id' : myJson.data[i].id,
      'daily_budget' : myJson.data[i].daily_budget,
      'clicks' : myJson.data[i].stats.clicks,
      'impressions' : myJson.data[i].stats.impressions
     });
   }
   responseBody = newArray;
  return exits.success(responseBody);
});