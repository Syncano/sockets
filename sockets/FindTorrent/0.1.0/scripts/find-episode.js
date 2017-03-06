var findtorrent = require('machinepack-findtorrent');

// Find a torrent for a given show episode
findtorrent.findEpisode(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
