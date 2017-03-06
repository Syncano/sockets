var utorrent = require('machinepack-utorrent');

// Remove the torrent specified by the hash parameter from the download list.
utorrent.removeTorrent(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
