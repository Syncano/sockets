var github = require('machinepack-github');

// Fetch recent comments from the specified GitHub repository.
github.listIssueComments(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
