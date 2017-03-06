var git = require('machinepack-git');

// Clone a git repo to a folder on disk (or if the folder already exists, just pull)
git.pullOrClone(ARGS).exec({

    
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
