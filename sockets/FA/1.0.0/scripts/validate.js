var 2fa = require('machinepack-2fa');

// Validates the given code compared to user's key.
2fa.validate(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    valid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
