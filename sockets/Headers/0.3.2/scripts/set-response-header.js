var headers = require('machinepack-headers');

// Set an eventual value for the specified header when the current outgoing response is sent.
headers.setResponseHeader(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
