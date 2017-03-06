var utorrent = require('machinepack-utorrent');

// Add a Torrent file to the uTorrent client.
utorrent.addTorrent(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
