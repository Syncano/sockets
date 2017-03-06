var segment = require('machinepack-segment');

// Track whenever a user sees a page of your website or screen of your mobile app, along with any properties about the page.
segment.page(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
