var path = require('path'),
  Filesystem = require('machinepack-fs');
// Copy over gulp file.
Filesystem.cp({
  source: path.resolve(__dirname, inputs.gulpFileSrcPath),
  destination: path.resolve(__dirname, inputs.outputDir)
}).exec({
  error: function (err){
    console.error('an error occurred- error details:',err);
    return exits.error();
  },
  doesNotExist: function(gulpFileSrcPath) {
    console.log('could not locate gulp file at '+gulpFileSrcPath);
    return exits.error();
  },
  success: function() {
    return exits.success();
  }
}); //</copy gulp file>