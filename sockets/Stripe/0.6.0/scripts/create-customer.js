// TODO: handle more specific exits (i.e. rate limit, invalid API key, etc.)

var stripe = require('stripe')(inputs.apiKey);

// Get the base options
var options = {
  description: inputs.description
};

stripe.customers.create(options, function(err, customer) {
  if (err) return exits.error(err);
  return exits.success(customer);
});