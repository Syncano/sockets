var arrays = require('machinepack-arrays');

// Get the length of the provided array.
arrays.length(ARGS).exec({

    // The length of the array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
