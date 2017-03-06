var arrays = require('machinepack-arrays');

// List the values of a particular key from an array of dictionaries.
arrays.pluck(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The array of values gathered by plucking the specified key out of each array item.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
