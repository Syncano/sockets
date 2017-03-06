var datetime = require('machinepack-datetime');

// Construct an absolute timestamp from structured date/time/timezone data.
datetime.timestamp(ARGS).exec({

    
    unknownTimezone: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
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
