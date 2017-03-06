var assets = require('machinepack-assets');

// Write README.md and package.json files for a production asset package.
assets.writeReadmeAndPackageJson(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
