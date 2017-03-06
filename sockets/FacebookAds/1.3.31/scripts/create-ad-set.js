var dk-facebookads = require('dk-machinepack-facebookads');

// create an ad set and the creative
dk-facebookads.createAdSet(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
