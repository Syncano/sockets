var wepay = require('machinepack-wepay');

// Get account URI to update account at WePay.
wepay.accountGetUri(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
