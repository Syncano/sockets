// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

// Get the base options
var options = {
  at_period_end: inputs.instant
};


stripe.customers.cancelSubscription(inputs.customer, inputs.sub, options, function(err, confirmation) {
  if (err) return exits.error(err);
  return exits.success(confirmation);
});