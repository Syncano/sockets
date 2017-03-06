var numbers = require('machinepack-numbers');

// Convert the given input string to a number.
numbers.toNumber(ARGS).exec({

    // The value obtained by converting the input string to a number.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
