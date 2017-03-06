var coinbase = require('machinepack-coinbase');

// Total price to sell some amount of bitcoin.
coinbase.getSellPrice(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
