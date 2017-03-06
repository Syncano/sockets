var stripe = require('machinepack-stripe');

// Create a new charge without storing customer or card objects in Stripe.
stripe.oneOffCharge(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
