var forecast.io = require('machinepack-forecast.io');

// Get the current weather at a specific latitude and longitude.
forecast.io.getCurrentForecast(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidLatOrLong: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidAPIKey: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidOptions: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
