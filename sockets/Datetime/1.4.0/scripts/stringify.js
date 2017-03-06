var datetime = require('machinepack-datetime');

// Convert a JS timestamp into conventional JSON date/time format (ISO 8601)
datetime.stringify(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalidDatetime: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
