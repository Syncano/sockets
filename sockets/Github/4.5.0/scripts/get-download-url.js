var github = require('machinepack-github');

// Build the URL to download a specific release/branch .zip file for a particular repo.
github.getDownloadUrl(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
