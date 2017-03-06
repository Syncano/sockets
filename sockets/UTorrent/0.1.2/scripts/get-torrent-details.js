var utorrent = require('machinepack-utorrent');

// Get details of a Torrent from uTorrent client.
utorrent.getTorrentDetails(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
