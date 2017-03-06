var assets = require('machinepack-assets');

// Generate a minified js string by reading, concating, and minifying the contents of the specified directory.
assets.minifyJavascriptAssets(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
