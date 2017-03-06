var facebook = require('machinepack-facebook');

// Get the URL on facebook.com that a user should visit to allow/deny the specified Facebook Developer app (i.e. your app).
facebook.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
