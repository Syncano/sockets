var mandrill = require('machinepack-mandrill');

// Send a plaintext email to the specified recipient.
mandrill.sendPlaintextEmail(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
