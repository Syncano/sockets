var path = require('path');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');

// Copy over images.
Filesystem.cp({
  source: path.resolve(inputs.imgSrcPath),
  destination: path.resolve(inputs.outputDir, 'images/'),
}).exec({
  error: exits.error,
  doesNotExist: function() {
    // If there is no images folder, that's cool too-- just exit as "success".
    return exits.success();
  },
  success: function() {
    return exits.success();
  }
}); //</copy images>