var googleapisdiscoveryservice = require('machinepack-googleapisdiscoveryservice');

// Retrieve the list of APIs supported at this endpoint.
googleapisdiscoveryservice.list(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
