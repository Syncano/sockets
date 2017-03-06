var dk-facebookads = require('dk-machinepack-facebookads');

// look up a campaign by name
dk-facebookads.getFirstCampaignIdForGivenCampaignName(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
