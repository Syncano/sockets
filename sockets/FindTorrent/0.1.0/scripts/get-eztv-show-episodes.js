var findtorrent = require('machinepack-findtorrent');

// Get Episodes for an EZTV Show
findtorrent.getEztvShowEpisodes(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
