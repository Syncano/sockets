var treeline-errors = require('machinepack-treeline-errors');

// Get the HTML for a page explaining that there was a compile error.
treeline-errors.brokenRoutePage(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
