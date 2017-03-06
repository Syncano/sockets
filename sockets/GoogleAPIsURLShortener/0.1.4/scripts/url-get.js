var googleapisurlshortener = require('machinepack-googleapisurlshortener');

// Expand a short URL
googleapisurlshortener.urlGet(ARGS).exec({

    
    invalidParameter: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    dailyLimitExceededUnreg: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
