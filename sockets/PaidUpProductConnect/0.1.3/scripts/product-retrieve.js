var pu-product-connect = require('pu-product-connect');

// Retrieve product by Id
pu-product-connect.productRetrieve(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
