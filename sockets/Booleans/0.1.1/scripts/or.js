var booleans = require('machinepack-booleans');

// Get the result of performing a boolean OR operation on two values.
booleans.or(ARGS).exec({

    // The value obtained from performing a boolean OR using the two provided inputs.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
