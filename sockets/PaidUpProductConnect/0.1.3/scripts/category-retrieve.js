var pu-product-connect = require('pu-product-connect');

// Retrieve categories of products
pu-product-connect.categoryRetrieve(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
