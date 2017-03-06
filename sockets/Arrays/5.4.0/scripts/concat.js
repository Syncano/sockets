var arrays = require('machinepack-arrays');

// Combine (aka concatenate) two arrays into a single array- one in front of the other.
arrays.concat(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // The result of concatenating the input arrays.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
