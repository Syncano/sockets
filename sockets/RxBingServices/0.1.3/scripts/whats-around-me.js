var rxbingservices = require('machinepack-rxbingservices');

// Bing Spatial Data Service: collects all entities around a specified geo location
rxbingservices.whatsAroundMe(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
