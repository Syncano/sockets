var googleapisurlshortener = require('machinepack-googleapisurlshortener');

// REQUIRED AUTH ! The url.list method retrieves a list of URLs shortened by the authenticated user.
googleapisurlshortener.urlList(ARGS).exec({

    
    unauthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidParameter: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
