var waterline = require('machinepack-waterline');

// Compile a radar query statement into the native dialect for a database, then send the native query.
waterline.query(ARGS).exec({

    // A normalized version of the result data from the database.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    // A normalized "footprint" dictionary representing the error from the database.
    queryFailed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
