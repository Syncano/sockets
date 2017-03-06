var arrays = require('machinepack-arrays');

// Build a new array which is an exact clone of an existing array, but in reverse order.
arrays.reverse(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The result of reversing the input array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
