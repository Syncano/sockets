var urls = require('machinepack-urls');

// Determine whether the specified string is a valid, fully-qualified URL.
urls.isUrl(ARGS).exec({

    // Whether the provided string was a valid, fully qualified URL.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
