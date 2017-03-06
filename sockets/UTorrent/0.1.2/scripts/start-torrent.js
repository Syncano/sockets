var utorrent = require('machinepack-utorrent');

// Start downloading the torrent specified by the hash parameter.
utorrent.startTorrent(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
