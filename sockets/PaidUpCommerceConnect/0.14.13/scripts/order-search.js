var paidup-commerce-connect = require('paidup-commerce-connect');

// search orders
paidup-commerce-connect.orderSearch(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
