var arrays = require('machinepack-arrays');

// Randomly select one item from an array.
arrays.sample(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    emptyArray: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // A random item selected from the array.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
