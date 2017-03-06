var findtorrent = require('machinepack-findtorrent');

// Query Kickass Torrents.
findtorrent.queryKickass(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
