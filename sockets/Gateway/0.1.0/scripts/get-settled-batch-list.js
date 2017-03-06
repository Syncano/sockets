var gateway = require('machinepack-gateway');

// get a batch list of settled transaction within the window of time
gateway.getSettledBatchList(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
