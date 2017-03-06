var aes256 = require('machinepack-aes256');

// Decrypt stream content and unzip it
aes256.decryptStream(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    errorNotStream: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    errorUnzip: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
