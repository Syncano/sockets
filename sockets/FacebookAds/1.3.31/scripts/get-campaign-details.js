var dk-facebookads = require('dk-machinepack-facebookads');

// get data about a specific ad set.
dk-facebookads.getCampaignDetails(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
