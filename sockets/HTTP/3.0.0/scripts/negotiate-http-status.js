var http = require('machinepack-http');

// Trigger a specific exit based on the provided HTTP status code.
http.negotiateHttpStatus(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    redirect: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    badRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unauthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    forbidden: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    otherClientError: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    serverError: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    other: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
