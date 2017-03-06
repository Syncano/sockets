var facebookads = require('machinepack-facebookads');

// return the ad set data, ad data, and ad creative, for all ad sets in campaign
facebookads.getCampaignOverview(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    noCampaignsYet: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
