var datetime = require('machinepack-datetime');

// Convert a JS timestamp and timezone into a human readable date/time.
datetime.format(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    unknownTimezone: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidDatetime: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
