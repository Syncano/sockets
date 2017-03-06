var findtorrent = require('machinepack-findtorrent');

// List all shows found on EZTV
findtorrent.getEztvShowlist(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
