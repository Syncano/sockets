var arrays = require('machinepack-arrays');

// Search the array and return all dictionaries that match the specified criteria.
arrays.findWhere(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The array of items matching the criteria.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
