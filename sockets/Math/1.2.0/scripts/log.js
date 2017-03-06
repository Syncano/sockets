var math = require('machinepack-math');

// Calculate the logarithm of a number at a particular base.
math.log(ARGS).exec({

    
    invalidLog: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidBase: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
