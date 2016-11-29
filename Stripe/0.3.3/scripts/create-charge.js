// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

// Get the base options
var options = {
  amount: inputs.amount,
  currency: inputs.currency,
  card: inputs.card,
  description: inputs.description || '',
  capture: inputs.capture
};

// Add customer if it's sent in
if (inputs.customer) {
  options.customer = inputs.customer;
}

stripe.charges.create(options, function(err, charge) {
  if (err) return exits.error(err);
  return exits.success(charge);
});