// fetch ad set information
var doJSONRequest = require('../lib/do-request');

getAdAccountId = require('machine').build(require('./get-ad-account-id'));
getPageName = require('machine').build(require('./get-page'));

getAdAccountId({
  "fbUserId" : inputs.fbUserId,
  "accessToken" : inputs.accessToken
}).exec({
  error: function(error){
    return exits.error(error);
  },

  success: function(account_id){
    // get the page name of the page id param
    getPageName({
      "fbPageId" : inputs.fbPageId,
      "accessToken" : inputs.accessToken
    }).exec({
      error: function(error){
        console.log(error);
        return exits.error(error);
      },

      success: function(page){
        doJSONRequest({
          method: 'post',
          url: ['/v2.3/', account_id.data[0].id, '/adcampaign_groups' ].join(""),
          data: {
            'name' : ['Woos - ', page.name].join(""),
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
    })
  }
})// success function find account id