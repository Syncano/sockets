var pu-commerce-connect = require('pu-commerce-connect');

// update payments to order
pu-commerce-connect.orderUpdatePayments(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
