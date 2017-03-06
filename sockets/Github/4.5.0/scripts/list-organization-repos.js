var github = require('machinepack-github');

// Fetch the list of repos in the specified Github organization.
github.listOrganizationRepos(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
