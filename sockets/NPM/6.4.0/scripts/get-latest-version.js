var npm = require('machinepack-npm');

// Look up the version string for the latest published version of the specified NPM package.
npm.getLatestVersion(ARGS).exec({

    // The version string for the latest published version of the specified package on NPM.
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
