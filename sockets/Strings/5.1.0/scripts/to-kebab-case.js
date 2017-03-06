var strings = require('machinepack-strings');

// Convert a string to kebab-case (dashes instead of spaces/underscores/varying capitalization).
strings.toKebabCase(ARGS).exec({

    // The kebab-cased (i.e. dash-delimited) string, lower-cased, with underscores and spaces removed.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
