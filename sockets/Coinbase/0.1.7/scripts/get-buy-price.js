var coinbase = require('machinepack-coinbase');

// Total price to buy some amount of bitcoin.
coinbase.getBuyPrice(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
