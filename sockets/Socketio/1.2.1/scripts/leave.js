var sockets = require('machinepack-sockets');

// Unsubscribes the specified sockets from a room.
sockets.leave(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
