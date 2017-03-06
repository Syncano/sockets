var npm = require('machinepack-npm');

// Install NPM dependencies of local package at the specified path.
npm.installDependencies(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
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
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
