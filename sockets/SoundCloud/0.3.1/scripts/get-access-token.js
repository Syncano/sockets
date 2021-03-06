var soundcloud = require('machinepack-soundcloud');

// Generate a new access token for acting on behalf of a particular SoundCloud user account.
soundcloud.getAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
