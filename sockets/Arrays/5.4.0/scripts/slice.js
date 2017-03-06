var arrays = require('machinepack-arrays');

// Copy a sub-array of consecutive items from the specified array.
arrays.slice(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The requested slice of the input array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
