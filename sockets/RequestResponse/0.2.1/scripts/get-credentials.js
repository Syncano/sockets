var reqres = require('machinepack-reqres');

// Parse the username and password from HTTP Basic Auth credentials encoded in the current request.
reqres.getCredentials(ARGS).exec({

    // The `username` and `password` parsed from the current request.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
