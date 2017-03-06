var http = require('machinepack-http');

// Fetch the HTML from a web page.
http.fetchWebpageHtml(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    badRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    forbidden: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unauthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    serverError: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    requestFailed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
