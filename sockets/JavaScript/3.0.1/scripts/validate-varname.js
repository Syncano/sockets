var javascript = require('machinepack-javascript');

// Determine whether the provided would be valid as the name of a ECMAScript 5.1 variable.
javascript.validateVarname(ARGS).exec({

    
    invalid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
