var markdown = require('machinepack-markdown');

// Load a markdown file from disk, compile to HTML, then save it back to disk.
markdown.compileToHtmlFileFromMdFile(ARGS).exec({

    // The metadata parsed from <docmeta> tags in the source markdown.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    couldNotRead: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotWrite: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotCompile: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotParse: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
