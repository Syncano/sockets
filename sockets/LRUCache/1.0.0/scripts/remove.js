var lrucache = require('machinepack-lrucache');

// Remove the object associated with the specified key from the cache
lrucache.remove(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
