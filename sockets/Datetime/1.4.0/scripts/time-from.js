var datetime = require('machinepack-datetime');

// Format a human-readable a JS timestamp (epoch ms) and timezone into a human-readable "time from" format (e.g. "6 minutes ago")
datetime.timeFrom(ARGS).exec({

    
    invalidToWhen: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidFromWhen: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
