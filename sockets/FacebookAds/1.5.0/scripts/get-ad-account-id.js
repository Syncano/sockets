var facebookads = require('machinepack-facebookads');

// get ad account ids for a given user with an access token
facebookads.getAdAccountId(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
