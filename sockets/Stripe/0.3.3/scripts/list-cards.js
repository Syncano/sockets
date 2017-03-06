var stripe-subscriptions = require('machinepack-stripe-subscriptions');

// List all cards in Stripe for a customer.
stripe-subscriptions.listCards(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
