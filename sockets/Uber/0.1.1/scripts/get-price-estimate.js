var uber = require('machinepack-uber');

// A price estimate for each product offered.
uber.getPriceEstimate(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    rateLimitExceeded: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    tooFar: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidApiKey: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noPriceAvail: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
