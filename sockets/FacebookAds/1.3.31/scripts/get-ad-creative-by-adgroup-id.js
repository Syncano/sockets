var dk-facebookads = require('dk-machinepack-facebookads');

// return the ad creative and some metadata
dk-facebookads.getAdCreativeByAdgroupId(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
