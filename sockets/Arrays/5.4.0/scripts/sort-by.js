var arrays = require('machinepack-arrays');

// Sort an array of dictionaries by a particular key.
arrays.sortBy(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The resulting array after sorting by the specified key.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
