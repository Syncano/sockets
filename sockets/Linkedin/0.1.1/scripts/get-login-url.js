var linkedin = require('machinepack-linkedin');

// Creates the login url used to gain acccess to their LinkedIn account.
linkedin.getLoginUrl(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
