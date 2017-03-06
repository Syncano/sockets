var dk-facebookads = require('dk-machinepack-facebookads');

// get all ad sets in a campaign, and fetch standard metadata
dk-facebookads.getAdSetsInCampaign(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
