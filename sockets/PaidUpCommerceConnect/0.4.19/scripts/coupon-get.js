var pu-commerce-connect = require('pu-commerce-connect');

// get a list of discont coupon
pu-commerce-connect.couponGet(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
