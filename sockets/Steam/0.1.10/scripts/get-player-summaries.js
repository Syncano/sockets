var steam = require('machinepack-steam');

// Returns basic profile information for a list of 64-bit Steam IDs.
steam.getPlayerSummaries(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
