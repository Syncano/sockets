var sockets = require('machinepack-sockets');

// Broadcast a message to all connected sockets in the specified room.
sockets.broadcast(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
