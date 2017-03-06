var stripe = require('machinepack-stripe');

// Capture the payment of a previously-created charge in Stripe.
stripe.captureCharge(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
