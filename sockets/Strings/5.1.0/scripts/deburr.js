var strings = require('machinepack-strings');

// Replace special alphabetical characters such as umlauts and accents with their basic, boring equivalents.
strings.deburr(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
