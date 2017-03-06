var arrays = require('machinepack-arrays');

// Construct an array.
arrays.construct(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // A new array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
