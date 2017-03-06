var github = require('machinepack-github');

// Generate a new access token for acting on behalf of a particular GitHub user account.
github.getAccessToken(ARGS).exec({

    
    redirectUriMismatch: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    badVerificationCode: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    incorrectClientCredentials: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
