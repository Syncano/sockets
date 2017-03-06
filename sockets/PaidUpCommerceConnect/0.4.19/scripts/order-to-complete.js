var pu-commerce-connect = require('pu-commerce-connect');

// orders to complete (cronjob)
pu-commerce-connect.orderToComplete(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
