var browserify = require('machinepack-browserify');

// Bundle the specified script and its required dependencies into a single JavaScript file.
browserify.bundle(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
