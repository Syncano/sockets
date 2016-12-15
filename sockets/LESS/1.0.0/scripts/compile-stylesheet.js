var path = require('path');
var LESS = require('less');
var _ = require('lodash');
var Filesystem = require('machinepack-fs');

// Resolve potentially-relative paths
inputs.source = path.resolve(inputs.source);
inputs.importPaths = _.map(inputs.importPaths, function (importPath) {
  return path.resolve(importPath);
});

// Load contents of stylesheet
Filesystem.read({
  source: inputs.source
}).exec({
  error: exits.error,
  doesNotExist: exits.doesNotExist,
  success: function (lessStr) {

    // Compile LESS
    // (which takes care of @import directives, loading other stylesheets from disk as necessary)
    try {
      LESS.render(lessStr, {
        filename: path.basename(inputs.source),
        paths: inputs.importPaths,
        compress: inputs.minify
      }, function (err, result) {
        if (err) {
          return exits.error(err);
        }

        // result.imports is an array of the absolute path of every LESS stylesheet imported
        // using @import directives from within the source stylesheet (and its imports... etc)

        return exits.success(result.css);
      });
    }
    catch (e) {
      // (just in case)
      return exits.error(e);
    }
  }
});