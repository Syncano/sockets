/**
* Module Dependencies
*/

var wepay = require('wepay').WEPAY;

// wepay object options
var wepay_options = {
  'client_id': inputs.clientId,
  'client_secret': inputs.clientSecret
  // 'api_version': 'API_VERSION'
};

// wepay request params
var wepay_params = {
  'client_id': inputs.clientId,
  'client_secret': inputs.clientSecret,
  'email': inputs.email,
  'scope': inputs.scope,
  'first_name': inputs.firstName,
  'last_name': inputs.lastName,
  'original_ip': inputs.originalIp,
  'original_device': inputs.originalDevice,
  'tos_acceptance_time': inputs.tosAcceptanceTime,
  'direct_uri': inputs.redirectUri || undefined,
  'callback_uri': inputs.callbackUri || undefined
};

// Instantiate new wepay instance with settings
var wp = new wepay(wepay_options);

// Set API environment
if(inputs.useProduction){
  wp.use_production();
}
else{
  wp.use_staging();
}

wp.call('/user/register', wepay_params, function onResponse(response) {

  // Convert buffer respond to JSON object
  var responseObj = JSON.parse(String(response));

  // Catch error
  if(responseObj.error){
    return exits.error(responseObj);
  }
  // Else success
  else{
    return exits.success(responseObj);
  }

});