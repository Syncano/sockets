var stripe = require('stripe')(inputs.apiKey);

stripe.customers.createCard(inputs.customer, {card: inputs.token}, function(err, card) {
  if (err) return exits.error(err);
  return exits.success(card);
});