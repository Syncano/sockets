var process = require('machinepack-process');

// Spawn a child process and have it run a command.
process.spawnChildProcess(ARGS).exec({

    // A Node child process instance.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
