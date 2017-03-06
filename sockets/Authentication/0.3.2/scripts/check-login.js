var sessionauth = require('machinepack-sessionauth');

// Check whether the current user is logged in.
sessionauth.checkLogin(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    otherwise: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
