var booleans = require('machinepack-booleans');

// Convert the given string value to a boolean.
booleans.toBoolean(ARGS).exec({

    // The value obtained by converting the input value to a boolean.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
