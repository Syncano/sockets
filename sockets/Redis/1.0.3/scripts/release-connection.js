var redis = require('machinepack-redis');

// Close an active connection to the Redis server.
redis.releaseConnection(ARGS).exec({

    // The `meta` property is reserved for custom driver-specific extensions.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    // The `error` property is a JavaScript Error instance containing the raw error from the database.  The `meta` property is reserved for custom driver-specific extensions.
    badConnection: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
