var path = require('path');
var fs = require('fs');
var unzip = require('unzip');
var Filesystem = require('machinepack-fs');

var sourceArchive = path.resolve(inputs.source);
var destinationDir = path.resolve(inputs.destination);

// Ensure the parent directory exists.
Filesystem.ensureDir({
  dir: destinationDir
}).exec({

  // An unexpected error occurred.
  error: exits.error,

  // OK.
  success: function() {

    var srcStream = fs.createReadStream(sourceArchive);
    var drainStream = unzip.Extract({ path: destinationDir });
    drainStream.once('close', function (){ return exits.success(); });
    drainStream.once('error', function (err){ return exits.error(err); });
    srcStream.once('error', function (err){ return exits.error(err); });
    srcStream.pipe(drainStream);
  }
});