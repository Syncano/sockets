var forecast.io = require('machinepack-forecast.io');

// Retrieves the forecast of a specific latitude and longitude at a specific time
forecast.io.getForecast(ARGS).exec({

    
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
