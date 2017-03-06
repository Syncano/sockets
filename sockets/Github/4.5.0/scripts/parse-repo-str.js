var github = require('machinepack-github');

// Parse a repo string (e.g. '/node-machine/machine')
github.parseRepoStr(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
