// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

stripe.customers.listCards(inputs.customer, function(err, response) {
  if (err) return exits.error(err);
  return exits.success(response);
});