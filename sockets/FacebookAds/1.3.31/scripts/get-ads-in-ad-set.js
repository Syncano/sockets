var dk-facebookads = require('dk-machinepack-facebookads');

// get ads in an ad set with standard metadata
dk-facebookads.getAdsInAdSet(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
