var wepay = require('machinepack-wepay');

// Look up the details of a payment account on WePay.
wepay.accountDetails(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
