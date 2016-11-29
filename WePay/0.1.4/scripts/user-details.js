/**
* Module Dependencies
*/

var wepay = require('wepay').WEPAY;

// wepay request settings
var wepay_settings = {
  'access_token': inputs.accessToken
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

wp.call('/user', {}, function onResponse(response) {

  var responseObj = JSON.parse(String(response));

  if(responseObj.error){
    return exits.error(responseObj);
  }
  else{
    return exits.success(responseObj);
  }

});