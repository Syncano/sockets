var wepay = require('machinepack-wepay');

// Find existing payment accounts. No params for all accounts by access token.
wepay.accountFind(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
