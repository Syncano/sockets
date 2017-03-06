var soundcloud = require('machinepack-soundcloud');

// Get the URL on SoundCloud that a user should visit to authorize the specified SoundCloud app (i.e. your app).
soundcloud.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
