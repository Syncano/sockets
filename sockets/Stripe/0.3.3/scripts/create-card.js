var stripe-subscriptions = require('machinepack-stripe-subscriptions');

// Create a new card for a customer
stripe-subscriptions.createCard(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
