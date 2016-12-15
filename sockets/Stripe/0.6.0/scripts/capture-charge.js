// TODO: handle more specific exits (i.e. rate limit, invalid API key, etc.)

var stripe = require('stripe')(inputs.apiKey);

stripe.charges.capture(inputs.charge, function(err, charge) {
  if (err) return exits.error(err);
  return exits.success(charge);
});