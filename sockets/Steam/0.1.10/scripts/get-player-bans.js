var steam = require('machinepack-steam');

// GetPlayerBans returns Community, VAC, and Economy ban statuses for given players.
steam.getPlayerBans(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
