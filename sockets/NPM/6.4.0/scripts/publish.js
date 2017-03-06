var npm = require('machinepack-npm');

// Publish a package to the public NPM registry.
npm.publish(ARGS).exec({

    
    alreadyExists: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchDir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notADir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidPackage: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
