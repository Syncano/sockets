var steam = require('machinepack-steam');

// Returns on global achievements overview of a specific game in percentages.
steam.getGlobalAchievementPercentageForApp(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
