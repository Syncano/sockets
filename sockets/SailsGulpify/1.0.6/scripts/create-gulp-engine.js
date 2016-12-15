var path = require('path'),
  cp = require('machine').build(require('./copy-files'));

cp({
  gulpFileSrcPath: path.resolve(__dirname, inputs.gulpFolderSrcPath),
  outputDir: path.resolve(__dirname, inputs.outputDir)
}).exec({
  error: function (err){
    console.error('an error occurred- error details:',err);
    return exits.error();
  },
  success: function() {
    //return exits.success();
    cp({
      gulpFileSrcPath: path.resolve(__dirname, '../lib/default-hooks.js'),
      outputDir: path.resolve(__dirname, '../../sails/lib/app/configuration/default-hooks.js')
    }).exec({
      error: function (err){
        console.error('an error occurred- error details:',err);
        return exits.error();
      },
      success: function() {
        return exits.success();
      }
    });
  }
});