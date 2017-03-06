var process = require('machinepack-process');

// Escape a value for use as a command-line option (e.g. the "XXXXX" in `--foobar='XXXXX'`).
process.escapeCliOpt(ARGS).exec({

    
    couldNotSerialize: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
