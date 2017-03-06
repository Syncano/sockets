var redis = require('machinepack-redis');

// Destroy the specified connection manager and destroy all of its active connections.
redis.destroyManager(ARGS).exec({

    // The `meta` property is reserved for custom driver-specific extensions.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    // The `error` property is a JavaScript Error instance with more information and a stack trace.  The `meta` property is reserved for custom driver-specific extensions.
    failed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
