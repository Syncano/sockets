var arrays = require('machinepack-arrays');

// Look up an item from the array at the specified index.
arrays.nth(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The item of the array at the specified index.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
