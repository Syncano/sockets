var 2fa = require('machinepack-2fa');

// Generates a QR code to store it by scanning the QR code.
2fa.generateQr(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
