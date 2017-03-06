var paidup-commerce-connect = require('paidup-commerce-connect');

// get orders to charge (cronjob)
paidup-commerce-connect.orderGetToCharge(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
