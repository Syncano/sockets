var waterline = require('machinepack-waterline');

// Begin a transaction, perform some logic, then either commit the transaction if everything worked, or roll it back if there were any errors.
waterline.transaction(ARGS).exec({

    // The result data sent back by the provided logic (`during`).
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
