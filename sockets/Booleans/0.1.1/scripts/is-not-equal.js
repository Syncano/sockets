var booleans = require('machinepack-booleans');

// Determine whether the first value is not equivalent to the second.
booleans.isNotEqual(ARGS).exec({

    // A boolean indicating whether the first value is not equal to the second.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
