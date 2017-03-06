var pu-schedule-connect = require('pu-schedule-connect');

// Calculate price for a product
pu-schedule-connect.calculatePrice(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
