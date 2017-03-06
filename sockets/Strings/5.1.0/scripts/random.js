var strings = require('machinepack-strings');

// Generate a random, alphanumeric string which is probabalistically-unique.
strings.random(ARGS).exec({

    // Random alphanumeric string, consisting only of numerals [0-9] and lowercase letters [a-z].
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
