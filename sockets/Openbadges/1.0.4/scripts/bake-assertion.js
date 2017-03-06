var openbadges = require('machinepack-openbadges');

// The baker will retrieve this image and bake your assertion data into it, returning it to you if your API call was successful.
openbadges.bakeAssertion(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    badAssertion: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
