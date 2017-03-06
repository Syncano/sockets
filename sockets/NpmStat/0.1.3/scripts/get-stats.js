var npmstat = require('machinepack-npmstat');

// Fetch download stats for the specified NPM package and date range.
npmstat.getStats(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
