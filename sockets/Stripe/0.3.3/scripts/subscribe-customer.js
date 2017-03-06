var stripe-subscriptions = require('machinepack-stripe-subscriptions');

// Subscribe a customer to a pre-existing plan.
stripe-subscriptions.subscribeCustomer(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
