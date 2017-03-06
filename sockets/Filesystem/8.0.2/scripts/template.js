var fs = require('machinepack-fs');

// Read file at source path as a template, render with provided data, then write to destination path.
fs.template(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    noTemplate: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    missingData: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotRender: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    alreadyExists: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
