var github = require('machinepack-github');

// Build an npm-installable URL compatible with private repos.
github.buildInstallableUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
