var sockets = require('machinepack-sockets');

// Get the unique ID of the socket making this virtual HTTP request.
sockets.getSocketId(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    reqNotCompatible: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
