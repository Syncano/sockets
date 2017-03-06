var angellist = require('machinepack-angellist');

// Get the URL on angel.co that a user should visit to allow/deny the specified AngelList developer app (i.e. your app).
angellist.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
