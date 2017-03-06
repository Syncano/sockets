var coindesk = require('machinepack-coindesk');

// Display CoinDesk bitcoin price index.
coindesk.getCoindeskBitcoinPriceIndex(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
