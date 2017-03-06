var weather = require('machinepack-weather');

// This machine will get the current weather at your location.
weather.getCurrentWeather(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
