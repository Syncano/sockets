var booleans = require('machinepack-booleans');

// Check that a number is within the specified range (inclusive).
booleans.isBetween(ARGS).exec({

    // A boolean indicating whether the number falls within the specified bounds.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
