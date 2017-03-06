var steam = require('machinepack-steam');

// GetSchemaForGame returns gamename, gameversion and availablegamestats(achievements and stats).
steam.getSchemaForGame(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
