var utorrent = require('machinepack-utorrent');

// Create a client instance for uTorrent API
utorrent.createClient(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
