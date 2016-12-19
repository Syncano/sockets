var async = require('async');
var doJSONRequest = require('../lib/do-request');

// fetch ad campaigns
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adCampaignGroupId ].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : 'adcampaigns{id,daily_budget,campaign_status,stats}'
  },
  headers: {},
},

// handle the response from facebook
function (err, responseBody) {
  if (err) { return exits.error(err); }
  if (typeof responseBody.adcampaigns === "undefined"){
    return exits.noCampaignsYet({});
  }
  // clean up the response into a useable js object literal
  var removeUnusedValues = [];
  var myJson = responseBody.adcampaigns;
  var len = myJson.data.length;



  for (var i=0; i<len; i++){
    if (myJson.data[i].daily_budget == '0'){
      var campaignStatus = 'PAUSED';
    } else {
      var campaignStatus = myJson.data[i].campaign_status ;
    }
    removeUnusedValues.push({
      'id' : myJson.data[i].id,
      'daily_budget' : myJson.data[i].daily_budget,
      'campaign_status' : campaignStatus,
        'clicks' : myJson.data[i].stats.clicks,
      'impressions' : myJson.data[i].stats.impressions
     });
   }

  // set the resultJson, what we pass back at the end, here.
  resultJson = {"adCampaigns" : removeUnusedValues };

  // Now that we have the ad sets associated with the campaign id, get an array of ids for the next call
  // prepare the array of ad campaign ids and indices for the next step in the process
  arrayAdCampaigns = [];
  for (var i = 0; i<resultJson.adCampaigns.length; i++){
    arrayAdCampaigns.push({ "id": resultJson.adCampaigns[i].id, "index" : i } );
  };

  // FETCH TOP AD FOR EACH AD CAMPAIGN
  // counter needs to be outside of the function so it can be updated by each iteration independently.
  var counter = 0;
  async.each(arrayAdCampaigns, function(adSet, callbackone) {

    //variables
    var doJSONRequest = require('../lib/do-request');

    // api call to facebook
    doJSONRequest({
      method: 'get',
      url: ['/v2.3/', adSet.id, '/adgroups' ].join(""),
      data: {
        'access_token': inputs.accessToken,
        'fields' : 'id,stats'
      },
      headers: {},
    },

    // handle the response for looking up all the ads in a given ad set.
    function (err, response) {
      if (err) { return exits.error(err); }

      // PARSING RESPONSE INTO THE CORRECT FORMAT
      var newArray = [];
      var len = response.data.length;
      for (var i=0; i<len; i++){
        newArray.push({
          'id' : response.data[i].id,
        });
      }

       // rank by impressions
       newArray.sort(function(a,b){
        return b.impressions - a.impressions;
    })

      // append the existing json with the top ad information.
      resultJson.adCampaigns[adSet.index].topAd = newArray[0] ;
      counter++;

      // if all of the parallel requests have completed, call the callback function
      if (arrayAdCampaigns.length == counter){
        callbackone(resultJson);
      }

      function callbackone(resultJson){
        // variables
        // counter for the next async.each function
        var countChoco = 0;
        arrayAds = [];
        // create the array of ad ids and their index in the resultJson so we can fetch more data on each, and return the data to the correct position in the resultJson
        for (var i = 0; i<resultJson.adCampaigns.length; i++){
          arrayAds.push({ "id": resultJson.adCampaigns[i].topAd.id, "index" : i } );
        }
        async.each(arrayAds, function(ad, callbacktwo){

          function callbacktwo(result){
            return exits.success(result);
          }

          doJSONRequest({
            method: 'get',
            url: ['/v2.3/', ad.id ].join(""),
            data: {
              'access_token': inputs.accessToken,
              'fields' : 'adcreatives{id,image_url,object_story_spec}'
            },
            headers: {},
            },
            function (err, responseBody) {
              if (err) { return exits.error(err); }
              rb = responseBody.adcreatives.data;
              removeUnusedValues = []
              removeUnusedValues.push({
                'id' : rb.id,
                'image_url' : rb[0].image_url,
                'title' : rb[0].object_story_spec.link_data.name,
                'tagline' : rb[0].object_story_spec.link_data.message
              });


              resultJson.adCampaigns[ad.index].topAd.creatives = removeUnusedValues[0];
              countChoco++;
              if (countChoco == arrayAds.length) {
                callbacktwo(resultJson);
              }
            }
          ) // end of doJSONRequest
        }) // end of async.each
      } // end of callback
    });
  });
}); //doJSONRequest fetch ad campaigns