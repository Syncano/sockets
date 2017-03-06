var spotify = require('machinepack-spotify');

// Get the URL on Spotify that a user should visit to authorize the specified Spotify app (i.e. your app).
spotify.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
