var twitter = require('machinepack-twitter');

// Generate a new access token for acting on behalf of a particular Twitter user account.
twitter.getAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
