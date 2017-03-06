var googleapisoauth2v2 = require('machinepack-googleapisoauth2v2');

// Getting access token using authorization token that Google provided you with
googleapisoauth2v2.getAccessToken(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalidRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidToken: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
