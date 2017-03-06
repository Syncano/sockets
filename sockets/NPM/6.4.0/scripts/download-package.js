var npm = require('machinepack-npm');

// Stream the tarball for the NPM package+version to disk, then extract it.
npm.downloadPackage(ARGS).exec({

    // The path to the downloaded & extracted NPM package on disk.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    untarFailed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unzipFailed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    downloadFailed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidSemVer: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
