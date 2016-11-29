// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);


stripe.customers.retrieveSubscription(inputs.customer, inputs.sub, function(err, confirmation) {
  if (err) return exits.error(err);
  return exits.success(confirmation);
});