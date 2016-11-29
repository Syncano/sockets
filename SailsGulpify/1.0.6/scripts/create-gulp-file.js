var path = require('path'),
  cp = require('machine').build(require('./copy-files'));

cp({
  gulpFileSrcPath: path.resolve(__dirname, inputs.gulpFileSrcPath),
  outputDir: path.resolve(__dirname, inputs.outputDir)
}).exec({
  error: function (err){
    console.error('an error occurred- error details:',err);
    return exits.error();
  },
  success: function() {
    return exits.success();
  }
});