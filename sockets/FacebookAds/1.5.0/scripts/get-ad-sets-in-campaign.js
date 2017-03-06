var facebookads = require('machinepack-facebookads');

// get all ad sets in a campaign, and fetch standard metadata
facebookads.getAdSetsInCampaign(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
