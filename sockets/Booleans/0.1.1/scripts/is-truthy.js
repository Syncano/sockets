var booleans = require('machinepack-booleans');

// Determine whether the value is "truthy".
booleans.isTruthy(ARGS).exec({

    // A boolean indicating whether the input value is truthy.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
