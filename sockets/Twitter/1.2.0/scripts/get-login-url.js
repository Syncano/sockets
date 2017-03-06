var twitter = require('machinepack-twitter');

// Get the URL on twitter.com that a user should visit to allow/deny the specified Twitter Developer app (i.e. your app).
twitter.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
