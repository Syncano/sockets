var paidup-commerce-connect = require('paidup-commerce-connect');

// Create a discount coupon
paidup-commerce-connect.couponCreate(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    validationError: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
