var wepay = require('machinepack-wepay');

// Search for checkouts associated with an account. Returns an array of matching checkouts.
wepay.checkoutFind(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
