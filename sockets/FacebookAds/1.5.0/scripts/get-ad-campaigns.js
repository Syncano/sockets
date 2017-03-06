var facebookads = require('machinepack-facebookads');

// get ad campaigns for a given ad account
facebookads.getAdCampaigns(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
