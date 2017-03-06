var arrays = require('machinepack-arrays');

// Randomly select an unordered subset of the array
arrays.sampleSubset(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    emptyArray: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // A random subset selected from the array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
