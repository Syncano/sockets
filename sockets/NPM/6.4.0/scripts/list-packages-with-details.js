var npm = require('machinepack-npm');

// List matching packages and include metadata from their package.json files.
npm.listPackagesWithDetails(ARGS).exec({

    // An array of package detail dictionaries for each of the matching NPM packages.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
