var twilio = require('machinepack-twilio');

// List the phone numbers potentially available (but not yet provisioned) to your Twilio account.
twilio.listPotentialNumbers(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
