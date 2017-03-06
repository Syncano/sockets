var assets = require('machinepack-assets');

// Prepare the assets in this package for production, then publish to NPM.
assets.productionify(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error2: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error3: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error4: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error5: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error6: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error7: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error8: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotParse: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error9: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    alreadyExists: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchDir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notADir: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidPackage: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error10: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
