// fetch ad set information
var doJSONRequest = require('../lib/do-request');
if (inputs.dailyBudget < 100 && inputs.dailyBudget != 0){
  console.log('minimum budget needs to be greater than 100 cents. However, 0 is an acceptable value.');
  return exits.budgetError();
}
// if budget is set to 0, then pause the campaign.
if (inputs.dailyBudget == 0) {
  console.log('0');
  doJSONRequest({
    method: 'post',
    url: ['/v2.3/', inputs.adCampaignId ].join(""),
    data: {
      'access_token': inputs.accessToken,
      'campaign_status' : 'PAUSED',
    },
    headers: {},
  },

  function (err, responseBody) {
    if (err) { return exits.error(err); }
    responseBody = 'campaign paused';
    return exits.success(responseBody);
  });
} // end if
else {
doJSONRequest({
  method: 'post',
  url: ['/v2.3/', inputs.adCampaignId ].join(""),
  data: {
    'daily_budget' : inputs.dailyBudget,
    'access_token': inputs.accessToken,
    'campaign_status' : 'ACTIVE',
  },
  headers: {},
},

function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success('changed daily budget');
  console.log(responseBody)
});
}