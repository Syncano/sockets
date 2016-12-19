// TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)
var stripe = require("stripe")(
    inputs.apiKey
);

stripe.charges.create({
  amount: inputs.amount,
  currency: "usd",
  source: {
      number:   inputs.cardnumber,
      exp_month:inputs.cardexpmonth,
      exp_year: inputs.cardexpyear,
      cvc: inputs.cardcvc
  },
    description: inputs.description
}, function(err, charge) {
    // asynchronously called
    if (err) return exits.error(err);
    return exits.success(charge);
});