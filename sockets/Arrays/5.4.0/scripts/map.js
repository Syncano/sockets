var arrays = require('machinepack-arrays');

// Iterate over each item of an array to build a new transformed array.
arrays.map(ARGS).exec({

    // A modified copy of the provided array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
