var paths = require('machinepack-paths');

// Resolve and normalize a potentially-relative path into an absolute path.
paths.resolve(ARGS).exec({

    // An absolute path.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
