var waterline = require('machinepack-waterline');

// Lease a database connection, perform some logic, then release it back from whence it came.
waterline.connect(ARGS).exec({

    // The result data (if any) sent back by the provided logic (`during`).
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
