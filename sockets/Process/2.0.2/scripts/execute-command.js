var process = require('machinepack-process');

// Execute a command like you would on the terminal.
process.executeCommand(ARGS).exec({

    
    notADir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    forbidden: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchDir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    timedOut: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The output returned from executing the command.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
