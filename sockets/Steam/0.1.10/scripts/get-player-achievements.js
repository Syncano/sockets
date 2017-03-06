var steam = require('machinepack-steam');

// Returns a list of achievements for this user by app id
steam.getPlayerAchievements(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
