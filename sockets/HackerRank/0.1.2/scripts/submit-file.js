var hackerrank = require('machinepack-hackerrank');

// Submit a source code file for compilation
hackerrank.submitFile(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
