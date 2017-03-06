var github = require('machinepack-github');

// Build a GitHub search string (the 'q' parameter for use with the GitHub Search API).
github.buildGithubSearchString(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
