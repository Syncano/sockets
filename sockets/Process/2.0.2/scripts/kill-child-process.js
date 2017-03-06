var process = require('machinepack-process');

// Gracefully kill a child process.
process.killChildProcess(ARGS).exec({

    
    invalidChildProcess: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotKill: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // Whether or not the child process had to be force-killed with "SIGKILL".
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
