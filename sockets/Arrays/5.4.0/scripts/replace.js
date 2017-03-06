var arrays = require('machinepack-arrays');

// Replace the item located at the specified index and return the result (a new array).
arrays.replace(ARGS).exec({

    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The resulting array after replacing the specified item.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
