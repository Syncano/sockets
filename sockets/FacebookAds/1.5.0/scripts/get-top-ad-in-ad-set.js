var facebookads = require('machinepack-facebookads');

// return the best performing ad in ad set
facebookads.getTopAdInAdSet(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
