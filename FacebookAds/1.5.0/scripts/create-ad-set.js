// VARIABLES
var doJSONRequest = require('../lib/do-request');
var async = require('async');
var generateAdCombinations = require('../lib/generateAdCombinations');

// VARIABLE CLEANING
// prefix ad account with act_
account = ['act_', inputs.adAccount].join("");
if (inputs.gender == 0) {
  inputs.gender = [];
} else if (inputs.gender == 1) {
  inputs.gender = [1];
} else {
  inputs.gender = [2];
}

// create the AD SET
return doJSONRequest({
  method: 'post',
  url: ['/v2.3/', account, '/adcampaigns' ].join(""),
  data: {
    'name' : ['AdRocket', ' - ', Date.now()].join(""),
    'campaign_group_id' : inputs.campaignGroupId,
    'campaign_status' : 'PAUSED',
    'bid_type' : 'ABSOLUTE_OCPM' ,
    'bid_info' : {"REACH" : 100, "CLICKS" : 200},
    'daily_budget' : '2500',
    // 'end_time': 0,
    'access_token': inputs.accessToken, // trying no start time to see if it goes immediately and no problems
    'targeting' : {
      'page_types': ['feed'],
      'geo_locations': inputs.locations,
      'genders': [2],
      'interests': inputs.interests,
      'age_min' : inputs.age_min,
      'age_max': inputs.age_max,
      },
  },
  headers: {},
},

function (err, responseBody) {
  if (err) { return exits.error(err); }


  // CREATE THE AD CREATIVES

  adSetId = responseBody.id;

  // GENERATING THE AD CREATIVE COMBINATIONS
  adCollection = generateAdCombinations(inputs.titles, inputs.captions, inputs.images)

  // CREATE AD CREATIVE AND AD AND ASSIGN TO AD SET
  ads = []; // store the AdIds in this array
  countChoco = 0;

  async.each(adCollection, function(creative, callback){
    function callback(result){
      if (err) { return exits.error(err);
      } else {
      return exits.success(result);
      }
    };

    return doJSONRequest({
      method: 'post',
      url: ['/v2.3/', account, '/adcreatives' ].join(""),
      data: {
        'access_token' : inputs.accessToken,
        'name' : 'test ad',
        'object_story_spec' : {
          "page_id" : inputs.fbPageId,
          "link_data" : {
            "message" : creative.title,
            "link" : inputs.url,
            "caption" : creative.caption,
            "image_hash" : creative.image,
          }
        }
      },
      headers: {},
    },
    // Response from Ad Set Creation
    function (err, responseBody) {
      if (err) {
        console.log(err);
        return exits.error(err); }
      // Variables
      adCreativeId = responseBody.id;

      // Now go create the ad, tying the ad creative together with the ad set

      return doJSONRequest({
        method: 'post',
        url: ['/v2.3/', account, '/adgroups' ].join(""),
        data: {
          'campaign_id': adSetId,
          'name' : ['AdRocket', '-', Date.now()].join(""),
          'access_token' : inputs.accessToken,
          'creative' : {
            'creative_id' : adCreativeId,
          }
        },
        headers: {},
      },
      function (err, responseBody) {
        if (err) {
          console.log(err);
          return exits.error(err); }

        countChoco++;
        ads.push(responseBody.id);
        if (countChoco == adCollection.length) {
          callback(ads);
        }
      })
    }
    )
  });
})