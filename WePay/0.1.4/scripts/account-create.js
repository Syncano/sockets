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
  'name': inputs.name,
  'description': inputs.description,
  'reference_id': inputs.referenceId || undefined,
  'type': inputs.type || undefined,
  'image_uri': inputs.imageUri || undefined,
  'gaq_domains': inputs.gaqDomains || undefined,
  'theme_object': inputs.themeObject || undefined,
  'mcc': inputs.mcc || undefined,
  'callback_uri': inputs.callbackUri || undefined,
  'country': inputs.country || undefined,
  'currencies': inputs.currencies || undefined,
  'country_options': inputs.countryOptions || undefined,
  'fee_schedule_slot': inputs.feeScheduleSlot || undefined
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

wp.call('/account/create', wepay_params, function onResponse(response) {

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