var npm = require('machinepack-npm');

// Determine whether or not a particular NPM version string is compatible within a semver range.
npm.isVersionCompatible(ARGS).exec({

    // Whether the version is compatible with ("satisfies") the specified semver range.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
