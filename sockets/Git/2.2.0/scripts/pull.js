var git = require('machinepack-git');

// Fetch from and integrate with a git repository or a local branch
git.pull(ARGS).exec({

    
    notRepo: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    forbidden: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchDir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    uncommittedChanges: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unresolvedConflicts: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    failed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
