var steam = require('machinepack-steam');

// Returns on global statistics of a specific game
steam.getGlobalStatsForGame(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
