var pu-commerce-connect = require('pu-commerce-connect');

// Update a coupon discount
pu-commerce-connect.couponUpdate(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
