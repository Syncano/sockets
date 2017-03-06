var npm = require('machinepack-npm');

// Compare two NPM version strings and return either 1, 0, or -1.
npm.compareVersions(ARGS).exec({

    // Either 1, 0, or -1; indicating which of the two versions is more recent (/greater), or if they're equivalent.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
