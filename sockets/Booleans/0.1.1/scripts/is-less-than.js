var booleans = require('machinepack-booleans');

// Determine whether the first value is less than the second.
booleans.isLessThan(ARGS).exec({

    // A boolean indicating whether the first value is less than (or equal to, if `Inclusive?` was set) the second.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
