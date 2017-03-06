var dk-facebookads = require('dk-machinepack-facebookads');

// get ad account ids for a given user with an access token
dk-facebookads.getAdAccountId(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
