var npm = require('machinepack-npm');

// Look up information about the latest version of the specified NPM package.
npm.fetchInfo(ARGS).exec({

    // Information about the specified NPM package, pulled directly from its package.json info in the NPM registry.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    packageNotFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotParse: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
