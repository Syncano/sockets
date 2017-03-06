var assets = require('machinepack-assets');

// Compile a LESS importer file and all connected stylesheets into CSS (this is usually the single entry point for all LESS in the project)
assets.compileLessStylesheets(ARGS).exec({

    
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
