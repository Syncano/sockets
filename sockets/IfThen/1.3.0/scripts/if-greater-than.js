var ifthen = require('machinepack-ifthen');

// Determine whether the first value is greater than the second.
ifthen.ifGreaterThan(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    otherwise: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
