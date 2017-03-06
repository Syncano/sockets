var pu-schedule-connect = require('pu-schedule-connect');

// Calculate prices for a product
pu-schedule-connect.calculatePrices(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
