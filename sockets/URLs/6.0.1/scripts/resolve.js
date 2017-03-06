var urls = require('machinepack-urls');

// Build a sanitized, fully-qualified version of the provided URL.
urls.resolve(ARGS).exec({

    // A sanitized, fully-qualified URL.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
