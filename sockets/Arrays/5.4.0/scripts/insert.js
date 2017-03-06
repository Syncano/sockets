var arrays = require('machinepack-arrays');

// Insert or append an item and return the result (a new array).
arrays.insert(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The resulting array after inserting the new item.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
