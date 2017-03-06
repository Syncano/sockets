var prismicio = require('machinepack-prismicio');

// Get a prismic document by id.
prismicio.getDocument(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    newSlug: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notAuthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
