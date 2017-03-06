var wepay = require('machinepack-wepay');

// Refunds the payment associated with the checkout created by the application. Checkout must be in "captured" state.
wepay.checkoutRefund(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
