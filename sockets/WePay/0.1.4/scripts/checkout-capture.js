var wepay = require('machinepack-wepay');

// Capture a checkout that was not auto captured.
wepay.checkoutCapture(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
