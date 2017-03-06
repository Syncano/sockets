var github = require('machinepack-github');

// Get the GitHub profile data for a user by access token.
github.getCurrentUser(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
