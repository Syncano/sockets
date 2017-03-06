var redis = require('machinepack-redis');

// Build and initialize a connection manager instance for this Redis database.
redis.createManager(ARGS).exec({

    // The `manager` property is a manager instance that will be passed into `getConnection()`. The `meta` property is reserved for custom driver-specific extensions.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    // The `error` property is a JavaScript Error instance explaining that (and preferably "why") the provided connection string is invalid.  The `meta` property is reserved for custom driver-specific extensions.
    malformed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The `error` property is a JavaScript Error instance with more information and a stack trace.  The `meta` property is reserved for custom driver-specific extensions.
    failed: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
