var localmachinepacks = require('machinepack-localmachinepacks');

// 
localmachinepacks.browseToPackUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notMachinepack: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noNpmUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSourceUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noGithubUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noDocsUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noTestsUrl: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
