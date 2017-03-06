var urls = require('machinepack-urls');

// Build a URL from a template string and a set of route parameters.
urls.format(ARGS).exec({

    // The result of applying the given route parameters to the input template.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
