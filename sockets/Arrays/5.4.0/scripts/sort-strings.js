var arrays = require('machinepack-arrays');

// Sort an array of strings alphabetically (A to Z)
arrays.sortStrings(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The resulting array after sorting by ascending value
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
