var path = require('path');
var Proc = require('machinepack-process');
var Filesystem = require('machinepack-fs');

// Ensure specified dir path is absolute by resolving it
// relative to the current working directory.
inputs.dir = path.resolve(inputs.dir);

// Ensure this is a valid package.
Filesystem.readJson({
  source: path.join(inputs.dir, 'package.json'),
  schema: {
    name: 'some-package',
    version: '2.0.0'
  }
}).exec({
  error: exits.error,
  doesNotExist: function (){
    return exits.invalidPackage();
  },
  couldNotParse: function (){
    return exits.invalidPackage();
  },
  success: function (){

    // Run `npm install`
    Proc.spawn({
      command: 'npm install',
      dir: inputs.dir
    }).exec({
      error: function (err){
        try {
          // err.stack
          // err.killed
          // err.signal
          // err.code
          return exits.error(err);
        }
        catch (_e) {
          return exits.error(err||_e);
        }
      },
      notADir: exits.notADir,
      noSuchDir: exits.noSuchDir,
      success: function (bufferedOutput){
        return exits.success();
      }
    });//</after spawning `npm install` as a child process>
  }
});//</after ensuring this is a valid package>