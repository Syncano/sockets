var assets = require('machinepack-assets');

// Bundle and write a minified JavaScript file to the output directory.
assets.writeMinifiedJavascript(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
