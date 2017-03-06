var redis = require('machinepack-redis');

// Get an active connection to Redis.
redis.getConnection(ARGS).exec({

    // A dictionary reporting any relevant output from this machine under these circumstances.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    // A dictionary reporting any relevant output from this machine under these circumstances.
    failed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
