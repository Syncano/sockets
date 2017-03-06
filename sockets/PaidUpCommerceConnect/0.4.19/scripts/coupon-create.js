var pu-commerce-connect = require('pu-commerce-connect');

// Create a discount coupon
pu-commerce-connect.couponCreate(ARGS).exec({

    
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
