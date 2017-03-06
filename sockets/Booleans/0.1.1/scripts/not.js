var booleans = require('machinepack-booleans');

// Get the result of performing a boolean NOT operation on a value.
booleans.not(ARGS).exec({

    // The value obtained from performing a boolean NOT on the provided input.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
