// fetch ad set information

// create the ad set
doBatchRequest({
  method: 'post',
  url: ['/v2.3', ]
})






var doJSONRequest = require('../lib/do-request');

getAdAccountId = require('machine').build(require('./get-ad-account-id'));

getAdAccountId({
  "fbUserId" : inputs.fbUserId,
  "accessToken" : inputs.accessToken
}).exec({
  error: function(error){
    return exits.error(error);
  },

  success: function(account_id){
    // get the page name of the page id param

    doJSONRequest({
      method: 'post',
      url: ['/v2.3/', account_id.data[0].id, '/adcampaigns' ].join(""),
      data: {
        'name' : ['Woo - ', page.name,'-', Date.now()].join(""),
        'bid_type' : 'ABSOLUTE_OCPM' ,
        'bid_info' : {"REACH" : 100, "CLICKS" : 200},
        'campaign_status' : 'PAUSED',
        'daily_budget' : '1000',
        'campaign_group_id' : inputs.campaignGroupId,
        'targeting' : {'geo_locations' : 'Boston'},
        'objective' : 'WEBSITE_CONVERSIONS',
        'campaign_group_status' : 'PAUSED',
        'access_token': inputs.accessToken

      },
      headers: {},
    },

        function (err, responseBody) {
          if (err) { return exits.error(err); }
          return exits.success(responseBody);
        });
      }
})// success function find account id