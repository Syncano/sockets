var stripe-subscriptions = require('machinepack-stripe-subscriptions');

// Create a new customer in Stripe
stripe-subscriptions.createCustomer(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
