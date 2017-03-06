var youtube = require('machinepack-youtube');

// Display the number of views of a Youtube Video.
youtube.getPlayCount(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    rateLimitExceeded: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
