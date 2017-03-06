var sailsgulpify = require('machinepack-sailsgulpify');

// NPM install and --save
sailsgulpify.installPackageNpm(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalidSemVer: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
