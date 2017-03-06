var math = require('machinepack-math');

// Divide one number by another and return the quotient.
math.divide(ARGS).exec({

    
    invalidDenominator: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
