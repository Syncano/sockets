var schemainspector = require('machinepack-schemainspector');

// Sanitize some json data against a schema.
schemainspector.sanitize(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
