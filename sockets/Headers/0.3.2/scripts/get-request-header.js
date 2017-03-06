var headers = require('machinepack-headers');

// Get the value of the specified header from the current incoming request.
headers.getRequestHeader(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
