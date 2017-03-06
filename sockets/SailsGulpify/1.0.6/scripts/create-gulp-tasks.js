var sailsgulpify = require('machinepack-sailsgulpify');

// Creates the gulp task folder and all related task files
sailsgulpify.createGulpTasks(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
