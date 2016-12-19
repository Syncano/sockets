// TODO: handle more specific exits (i.e. rate limit, card does not exist, etc.)

var stripe = require('stripe')(inputs.apiKey);

stripe.customers.deleteCard(inputs.customer, inputs.card, function(err, response) {
  if (err) return exits.error(err);
  if (response.deleted === false) return exits.error(new Error('E_CARD_NOT_DELETED'));
  return exits.success(response);
});