var markdown = require('machinepack-markdown');

// Parse data encoded via <docmeta> tags in a Markdown string.
markdown.parseDocmetaTags(ARGS).exec({

    // The metadata parsed from <docmeta> tags in the source markdown.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
