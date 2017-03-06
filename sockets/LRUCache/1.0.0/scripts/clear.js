var lrucache = require('machinepack-lrucache');

// Clear all the objects from the LRUCache
lrucache.clear(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
