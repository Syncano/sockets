var github = require('machinepack-github');

// Fetch the list of repos belonging to the specified Github user or organization.
github.listRepos(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
