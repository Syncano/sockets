var gateway = require('machinepack-gateway');

// get data for unsettled transactions
gateway.getUnsettledTransactionList(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
