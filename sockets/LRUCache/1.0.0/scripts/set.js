var lrucache = require('machinepack-lrucache');

// Put a new object in the cache associated with the specified key.
lrucache.set(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
