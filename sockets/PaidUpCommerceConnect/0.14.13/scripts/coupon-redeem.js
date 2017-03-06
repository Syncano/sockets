var paidup-commerce-connect = require('paidup-commerce-connect');

// Redeem a coupon discount
paidup-commerce-connect.couponRedeem(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notAvailable: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
