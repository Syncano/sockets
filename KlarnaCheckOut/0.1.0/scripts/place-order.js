var klarna = require("klarna-checkout");

klarna.init({
  eid: inputs.eid,
  secret: inputs.secret,
  live: false
});

klarna.config({
  purchase_country: inputs.country,
  purchase_currency: inputs.currency,
  locale: inputs.locale,
  terms_uri: 'http://www.example.com',
  cancellation_terms_uri: 'http://www.example.com',
  checkout_uri: 'http://www.example.com',
  confirmation_uri: inputs.confirmationURL,
  push_uri: 'http://www.example.com'
});

return klarna.place(inputs.cart).then(function(id) {
  console.log("Klarna ID :", id);
  return klarna.fetch(id);
}, function(error) {
  console.log("error:");
  return exits.error(error);
}).then(function(order) {
  console.log("Snippet received");
  return exits.success(order.gui.snippet);
}, function(error) {
  return exits.error(error);
});