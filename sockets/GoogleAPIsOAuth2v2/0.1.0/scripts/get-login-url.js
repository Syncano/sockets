var googleapisoauth2v2 = require('machinepack-googleapisoauth2v2');

// Generating an authentication URL
googleapisoauth2v2.getLoginUrl(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
