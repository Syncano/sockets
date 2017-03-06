var googleapisoauth2v2 = require('machinepack-googleapisoauth2v2');

// Get OAuth2 client
googleapisoauth2v2.getOauth2Client(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
