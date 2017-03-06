var javascript = require('machinepack-javascript');

// Given a string, return a similar version of the string, but which is camel-cased and otherwise stripped of special characters, whitespace, etc. so that it is usable as an ECMAScript variable.
javascript.coerceVarname(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    collidesWithReservedWord: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
