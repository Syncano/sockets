var booleans = require('machinepack-booleans');

// Determine whether the value is defined.
booleans.isDefined(ARGS).exec({

    // A boolean indicating whether the input value is defined.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
