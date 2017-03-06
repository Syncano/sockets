var findtorrent = require('machinepack-findtorrent');

// Query for torrents from all torrent providers
findtorrent.queryAll(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
