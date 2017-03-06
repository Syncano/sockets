var phantomjscloud = require('machinepack-phantomjscloud');

// Get the browser-rendered version of the web pages at the specified URLs.
phantomjscloud.renderPages(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    rateLimitExceeded: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
