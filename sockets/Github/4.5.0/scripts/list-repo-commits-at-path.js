var github = require('machinepack-github');

// Fetch recent commits from a remote GitHub repository within the specifed path.
github.listRepoCommitsAtPath(ARGS).exec({

    
    badRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
