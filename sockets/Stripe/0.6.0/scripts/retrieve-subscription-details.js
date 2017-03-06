var stripe = require('machinepack-stripe');

// Retrieve details of a specific, active subsription for a customer.
stripe.retrieveSubscriptionDetails(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
