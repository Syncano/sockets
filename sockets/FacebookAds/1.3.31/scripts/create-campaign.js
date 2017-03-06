var dk-facebookads = require('dk-machinepack-facebookads');

// create a facebook campaign
dk-facebookads.createCampaign(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
