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

  // parse the response and create a new json object.
  var myJson = responseBody;
  var newArray = [];
  var len = myJson.data.length;
  for (var i=0; i<len; i++){
    newArray.push({
      'id' : myJson.data[i].id,
      'clicks' : myJson.data[i].stats.clicks,
      'impressions' : myJson.data[i].stats.impressions
     });
   }
   newArray.sort(function(a,b){
    return b.impressions - a.impressions;
  }),
  responseBody = newArray[0];
  return exits.success(responseBody);
});