var utorrent = require('machinepack-utorrent');

// List all Torrents from the uTorrent client.
utorrent.listTorrents(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
