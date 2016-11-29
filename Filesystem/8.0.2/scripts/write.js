var path = require('path');
var fsx = require('fs-extra');


// In case we ended up here w/ a relative path,
// resolve it using the process's CWD
inputs.destination = path.resolve(inputs.destination);

// Only override an existing file if `inputs.force` is true
fsx.exists(inputs.destination, function(exists) {
  if (exists && !inputs.force) {
    return exits.alreadyExists();
  }

  // Delete existing files and/or directories if necessary.
  (function _deleteExistingFilesAndOrDirsIfNecessary(next) {
    if (!exists) {
      return next();
    }
    else {
      fsx.remove(inputs.destination, next);
    }
  })(function nowWriteFileToDisk(err){
    if (err) { return exits(err); }

    // Now write the file to disk.
    fsx.outputFile(inputs.destination, inputs.string, exits);

  });//</after deleting existing file(s)/dir(s) if necessary>
});//</fsx.exists()>