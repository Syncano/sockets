var age = require('machinepack-age');

// Calculate an age based on date of birth.
age.calculate(ARGS).exec({

    
    invalidDateFormat: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
