var paths = require('machinepack-paths');

// Combine multiple path segments into a single result path.
paths.join(ARGS).exec({

    // The combined path.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
