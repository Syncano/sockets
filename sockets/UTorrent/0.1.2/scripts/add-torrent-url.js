var utorrent = require('machinepack-utorrent');

// Add a torrent URL to the uTorrent client.
utorrent.addTorrentUrl(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
