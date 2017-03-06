var sailsgulpify = require('machinepack-sailsgulpify');

// Creates a gulp file from template in the root project directory
sailsgulpify.createGulpFile(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
