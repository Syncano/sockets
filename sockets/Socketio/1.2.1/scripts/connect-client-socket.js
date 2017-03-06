var sockets = require('machinepack-sockets');

// Connect a Socket.io client to a Sails.js server.
sockets.connectClientSocket(ARGS).exec({

    
    tookTooLong: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
