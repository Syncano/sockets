var npm = require('machinepack-npm');

// Restrict access to a package published on NPM.
npm.restrict(ARGS).exec({

    
    unscopedPackage: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
