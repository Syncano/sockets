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
  'start': inputs.start || undefined,
  'limit': inputs.limit || undefined,
  'reference_id': inputs.referenceId || undefined,
  'state': inputs.state || undefined,
  'preapproval_id': inputs.preapprovalId || undefined,
  'start_time': inputs.startTime || undefined,
  'end_time': inputs.endTime || undefined,
  'sort_order': inputs.sortOrder || undefined,
  'shipping_fee': inputs.shippingFee || undefined
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

wp.call('/checkout/find', wepay_params, function onResponse(response) {

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