var azure = require('machinepack-azure');

// Detects if there is an active azure subscription
azure.checkActiveSubscription(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
