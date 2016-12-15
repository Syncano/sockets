var path = require('path');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');
var thisPack = require('../');

// Ensure provided paths are absolute.
inputs.lessEntryPoint = path.resolve(inputs.lessSrcDir);
inputs.outputDir = path.resolve(inputs.outputDir);

// Minify LESS files.
thisPack.compileLessStylesheets({
  lessSrcDir: inputs.lessSrcDir,
  minify: true
}).exec({
  error: exits.error,
  // If no LESS assets exist, that's ok, just trigger the success exit anyways.
  doesNotExist: function() {
    return exits.success();
  },
  success: function(css) {

    // Write the resulting JS file to disk.
    Filesystem.write({
      destination: path.resolve(inputs.outputDir, 'production.min.css'),
      string: css,
      force: true
    }).exec({
      error: exits.error,
      success: function() {
        return exits.success();
      }
    });
  }
});