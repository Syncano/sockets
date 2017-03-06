var facebook-oauth = require('machinepack-facebook-oauth');

// Generate a new access token for acting on behalf of a particular Facebook user account.
facebook-oauth.getAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
