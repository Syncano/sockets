var booleans = require('machinepack-booleans');

// Determine whether the first value is equivalent to the second.
booleans.isEqual(ARGS).exec({

    // A boolean indicating whether the first value is equal to the second.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
