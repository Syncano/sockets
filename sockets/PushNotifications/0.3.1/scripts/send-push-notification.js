var pushnotifications = require('machinepack-pushnotifications');

// Send a push notification using APN or GCM
pushnotifications.sendPushNotification(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
