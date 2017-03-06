var ifthen = require('machinepack-ifthen');

// Determine whether the first value is equivalent to the second.
ifthen.ifEqual(ARGS).exec({

    
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
