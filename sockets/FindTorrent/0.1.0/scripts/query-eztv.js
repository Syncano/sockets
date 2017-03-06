var findtorrent = require('machinepack-findtorrent');

// Query EZTV Torrents.
findtorrent.queryEztv(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
