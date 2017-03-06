var facebook-oauth = require('machinepack-facebook-oauth');

// Get information about the Facebook user with the specified access token.
facebook-oauth.getUserByAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
