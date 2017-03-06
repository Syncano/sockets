var paidup-commerce-connect = require('paidup-commerce-connect');

// get active orders
paidup-commerce-connect.orderActive(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
