var github = require('machinepack-github');

// Get the URL on github.com that a user should visit to authorize the specified GitHub app (i.e. your app).
github.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
