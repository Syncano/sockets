var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var Archiver = require('archiver');
var Filesystem = require('machinepack-fs');

var srcPaths = _.map(inputs.sources, function (sourcePath){
  return path.resolve(sourcePath);
});
var zipFileDestination = path.resolve(inputs.destination);
var zipFileParentPath = path.resolve(zipFileDestination, '..');

// Ensure the parent directory exists.
Filesystem.ensureDir({
  dir: zipFileParentPath
}).exec({

  // An unexpected error occurred.
  error: exits.error,

  // OK.
  success: function() {

    var archive = Archiver('zip');

    var outputStream = fs.createWriteStream(zipFileDestination);
    outputStream.once('close', function() {
      return exits.success({
        bytesWritten: archive.pointer()
      });
    });
    outputStream.once('error', function (err) {
      return exits.error(err);
    });
    archive.once('error', function (err) {
      return exits.error(err);
    });

    archive.pipe(outputStream);

    archive.bulk(_.map(srcPaths, function convertPathIntoArchiverBulkInstr(srcPath){
      // Get (1) srcPath's parent and (2) the relative path to our srcPath from its parent
      var srcParent = path.resolve(srcPath, '..');
      var srcRelative = path.relative(srcParent, srcPath);
      return { src: [ srcRelative, path.join(srcRelative, '**') ], cwd: srcParent, expand: true };
    }));

    archive.finalize();

  }
});