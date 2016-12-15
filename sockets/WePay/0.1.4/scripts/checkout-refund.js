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
  'checkout_id': inputs.checkoutId,
  'refund_reason': inputs.refundReason,
  'amount': inputs.amount || undefined,
  'app_fee': inputs.appFee || undefined,
  'payer_email_message': inputs.payerEmailMessage || undefined,
  'payee_email_message': inputs.payeeEmailMessage || undefined
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

wp.call('/checkout/refund', wepay_params, function onResponse(response) {

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