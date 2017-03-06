var twilio = require('machinepack-twilio');

// Send a message using the Twilio API
twilio.sendMessage(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noPhoneNumbersAvailable: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noBodyOrMediaSpecified: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
