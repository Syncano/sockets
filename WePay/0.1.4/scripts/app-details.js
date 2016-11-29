/**
* Module Dependencies
*/

var wepay = require('wepay').WEPAY;

// wepay request settings
var wepay_settings = {
  'client_id': inputs.clientId,
  'client_secret': inputs.clientSecret
  // 'api_version': 'API_VERSION'
};

// Instantiate new wepay instance with settings
var wp = new wepay(wepay_settings);

// Set API environment
if(inputs.useProduction){
  wp.use_production();
}
else{
  wp.use_staging();
}

wp.call('/app',
{
  'client_id': inputs.clientId,
  'client_secret': inputs.clientSecret
},
function(response) {

  var responseObj = JSON.parse(String(response));

  if(responseObj.error){
    return exits.error(responseObj);
  }
  else{
    return exits.success(responseObj);
  }

});