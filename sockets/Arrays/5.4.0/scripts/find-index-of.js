var arrays = require('machinepack-arrays');

// Look up the first occurrence of the dictionary matching the specified criteria and return its array index.
arrays.findIndexOf(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The index where the array item is located.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
