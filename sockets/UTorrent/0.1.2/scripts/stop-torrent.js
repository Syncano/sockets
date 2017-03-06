var utorrent = require('machinepack-utorrent');

// Stop downloading the torrent specified by the hash parameter.
utorrent.stopTorrent(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
