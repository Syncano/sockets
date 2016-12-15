var path = require('path');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');
var thisPack = require('../');

// Ensure provided paths are absolute.
inputs.jsSrcDir = path.resolve(inputs.jsSrcDir);
inputs.outputDir = path.resolve(inputs.outputDir);

// Minify JavaScript files.
thisPack.minifyJavascriptAssets({
  dir: inputs.jsSrcDir,
}).exec({
  error: exits.error,
  // If no JavaScript assets exist, that's ok, just trigger the success exit anyways.
  doesNotExist: function() {
    return exits.success();
  },
  success: function(js) {

    // Write the resulting JS file to disk.
    Filesystem.write({
      destination: path.resolve(inputs.outputDir, 'production.min.js'),
      string: js,
      force: true
    }).exec({
      error: exits.error,
      success: function() {
        return exits.success();
      }
    });
  }
});