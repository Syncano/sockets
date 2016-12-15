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
var wepay_params = {
  'account_id': inputs.accountId,
  'short_description': inputs.shortDescription,
  'type': inputs.type,
  'amount': inputs.amount,
  'currency': inputs.currency,
  'long_description': inputs.longDescription || undefined,
  'email_message': inputs.emailMessage || undefined,
  'fee': inputs.fee || undefined,
  'callback_uri': inputs.callbackUri || undefined,
  'auto_capture': inputs.autoCapture ? true : false, // Booleans need ternary or false evaluated to undefined
  'reference_id': inputs.referenceId || undefined,
  'unique_id': inputs.uniqueId || undefined,
  'hosted_checkout': inputs.hostedCheckout || undefined,
  'payment_method': inputs.paymentMethod || undefined,
  'delivery_type': inputs.deliveryType || undefined
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

wp.call('/checkout/create', wepay_params, function onResponse(response) {

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