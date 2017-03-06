var steam = require('machinepack-steam');

// Returns the friend list of any Steam user, provided his Steam Community profile visibility is set to "Public".
steam.getFriendList(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
