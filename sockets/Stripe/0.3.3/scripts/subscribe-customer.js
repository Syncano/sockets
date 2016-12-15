// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

// Get the base options
var options = {
  plan: inputs.plan,
  quantity: inputs.quantity,
  card: inputs.card
};


stripe.customers.createSubscription(inputs.customer, options, function(err, charge) {
  if (err) return exits.error(err);
  return exits.success(charge);
});