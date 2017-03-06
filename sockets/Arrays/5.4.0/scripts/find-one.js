var arrays = require('machinepack-arrays');

// Search the array for the first dictionary that matches the specified criteria.
arrays.findOne(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The first item in the that matches the criteria.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
