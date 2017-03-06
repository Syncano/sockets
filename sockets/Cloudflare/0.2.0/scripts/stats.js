var cloudflare = require('machinepack-cloudflare');

// Retrieve domain statistics for a given time frame
cloudflare.stats(ARGS).exec({

    
    notAuthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidInput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    apiLimit: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
