var sailsgulpify = require('machinepack-sailsgulpify');

// Modifies core sails files ading the ability to toggle between grunt and gulp via cli argument
sailsgulpify.createGulpEngine(ARGS).exec({

    
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
