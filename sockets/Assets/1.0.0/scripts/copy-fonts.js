var path = require('path');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');

// Copy over fonts.
Filesystem.cp({
  source: path.resolve(inputs.fontsSrcPath),
  destination: path.resolve(inputs.outputDir, 'fonts/'),
}).exec({
  error: exits.error,
  doesNotExist: function() {
    // If there is no fonts folder, that's cool too-- just exit as "success".
    return exits.success();
  },
  success: function() {
    return exits.success();
  }
}); //</copy fonts>