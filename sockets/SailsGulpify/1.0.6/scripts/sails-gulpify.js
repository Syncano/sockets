var sailsgulpify = require('machinepack-sailsgulpify');

// Main Machine that combine all other machines in the pack to gulpify sails
sailsgulpify.sailsGulpify(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
