var 2fa = require('machinepack-2fa');

// Generates a crypto secure hex key with 32 characters.
2fa.generateKey(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
