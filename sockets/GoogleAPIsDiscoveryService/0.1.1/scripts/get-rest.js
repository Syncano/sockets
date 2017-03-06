var googleapisdiscoveryservice = require('machinepack-googleapisdiscoveryservice');

// Retrieve the description of a particular version of an api.
googleapisdiscoveryservice.getRest(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
