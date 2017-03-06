var markdown = require('machinepack-markdown');

// Compile a Markdown string into an HTML string.
markdown.compileToHtml(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
