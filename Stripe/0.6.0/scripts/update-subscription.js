// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

// Get the base options
var options = {
  plan: inputs.plan,
  quantity: inputs.quantity,
  prorate: inputs.prorate
};


stripe.customers.updateSubscription(inputs.customer, inputs.sub, options, function(err, charge) {
  if (err) return exits.error(err);
  return exits.success(charge);
});