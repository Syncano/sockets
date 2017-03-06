var 2fa = require('machinepack-2fa');

// Generates a Code using the users secret key which can then be verified
2fa.generateCode(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
