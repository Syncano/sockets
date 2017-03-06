var urls = require('machinepack-urls');

// Parse metadata from a URL.
urls.parse(ARGS).exec({

    // Information obtained by parsing the input URL.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
