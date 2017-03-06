var fred = require('machinepack-fred');

// Get the observations or data values for an economic data series.
fred.getSeriesObservations(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
