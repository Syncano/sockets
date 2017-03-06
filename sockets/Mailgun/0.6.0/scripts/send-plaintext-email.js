var mailgun = require('machinepack-mailgun');

// Send a simple plaintext email.
mailgun.sendPlaintextEmail(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
