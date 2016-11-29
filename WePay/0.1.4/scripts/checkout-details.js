/**
* Module Dependencies
*/

var wepay = require('wepay').WEPAY;

// wepay object options
var wepay_options = {
  'access_token': inputs.accessToken
  // 'api_version': 'API_VERSION'
};

// wepay request params
// requred
var wepay_params = {
  'checkout_id': inputs.checkoutId
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

wp.call('/checkout', wepay_params, function onResponse(response) {

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