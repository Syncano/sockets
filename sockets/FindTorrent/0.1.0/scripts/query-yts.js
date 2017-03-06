var findtorrent = require('machinepack-findtorrent');

// Query YTS Torrents.
findtorrent.queryYts(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
