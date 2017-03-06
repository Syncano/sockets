var soundcloud = require('machinepack-soundcloud');

// Get the SoundCloud profile data for a user by access token.
soundcloud.getCurrentUser(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
