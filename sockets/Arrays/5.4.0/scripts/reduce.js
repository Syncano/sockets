var arrays = require('machinepack-arrays');

// Run some logic (the "iteratee") once for each item of an array, accumulating a single result.
arrays.reduce(ARGS).exec({

    // The accumulated result value.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
