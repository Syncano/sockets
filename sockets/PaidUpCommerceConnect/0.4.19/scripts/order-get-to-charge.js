var pu-commerce-connect = require('pu-commerce-connect');

// get orders to charge (cronjob)
pu-commerce-connect.orderGetToCharge(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
