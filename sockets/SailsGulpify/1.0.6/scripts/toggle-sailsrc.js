var sailsgulpify = require('machinepack-sailsgulpify');

// Swap .sailsrc, changing from grunt to gulp and back
sailsgulpify.toggleSailsrc(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
