var datetime = require('machinepack-datetime');

// Parse a JSON-formatted (ISO 8601) date/time string into a JS timestamp (epoch ms).
datetime.parse(ARGS).exec({

    
    invalidDatetime: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
