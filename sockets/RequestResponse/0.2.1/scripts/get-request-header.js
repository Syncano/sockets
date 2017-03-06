var reqres = require('machinepack-reqres');

// Get the value of the specified request header from the current HTTP/vHTTP request.
reqres.getRequestHeader(ARGS).exec({

    // The raw string value of the specified request header.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
