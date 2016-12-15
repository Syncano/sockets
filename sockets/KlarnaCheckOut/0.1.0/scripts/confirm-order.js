var klarna = require("klarna-checkout");

klarna.init({
  eid: inputs.eid,
  secret: inputs.secret,
  live: inputs.live
});

klarna.config({
  purchase_country: inputs.country,
  purchase_currency: inputs.currency,
  locale: inputs.locale,
  terms_uri: 'http://www.example.com',
  cancellation_terms_uri: 'http://www.example.com',
  checkout_uri: 'http://www.example.com',
  confirmation_uri: 'http://localhost:3000/confirmation?klarna_order_id={checkout.order.id}',
  push_uri: 'http://www.example.com'
});

return klarna.confirm(inputs.id, inputs.order_ref).then(function(order) {
  console.log("Order confirmed");
  return exits.success(order);
}, function(error) {
  return exits.success(error);
});