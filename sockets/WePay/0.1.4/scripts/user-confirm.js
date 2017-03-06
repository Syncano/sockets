var wepay = require('machinepack-wepay');

// Send confirmation email to users registered with Register User machine.
wepay.userConfirm(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
