var stripe-subscriptions = require('machinepack-stripe-subscriptions');

// Delete a card in Stripe for a customer
stripe-subscriptions.deleteCard(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
