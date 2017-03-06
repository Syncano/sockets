var twilio = require('machinepack-twilio');

// List the available phone numbers for a particular account.
twilio.listPhoneNumbers(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
