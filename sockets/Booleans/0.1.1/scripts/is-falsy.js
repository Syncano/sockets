var booleans = require('machinepack-booleans');

// Determine whether the value is "falsy".
booleans.isFalsy(ARGS).exec({

    // A boolean indicating whether the input value is falsy.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
