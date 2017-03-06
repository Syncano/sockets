var arrays = require('machinepack-arrays');

// Build a duplicate-free version of an array of dictionaries, judging uniqueness based on a particular key.
arrays.uniqBy(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The resulting array after removing duplicate items.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
