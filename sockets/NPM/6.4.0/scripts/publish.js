var Path = require('path');
var Proc = require('machinepack-process');
var Filesystem = require('machinepack-fs');

Filesystem.readJson({
  source: Path.resolve(inputs.dir, 'package.json'),
  schema: {
    name: 'some-package',
    version: '2.0.0'
  }
}, {
  error: exits.error,
  doesNotExist: function (){
    return exits.invalidPackage();
  },
  couldNotParse: function (){
    return exits.invalidPackage();
  },
  success: function (pkgData){

    // if this package will be public (`restrictAccess` disabled)
    // then the command will include `--access=public`
    var cmd = 'npm publish';
    if (!inputs.restrictAccess) {
      cmd += ' --access=public';
    }

    Proc.spawn({
      command: cmd,
      dir: inputs.dir
    }).exec({
      error: function (err){
        try {
          // err.stack
          // err.killed
          // err.signal
          // err.code
          if (err.message.match(/You cannot publish over the previously published version/i)){
            return exits.alreadyExists();
          }
          return exits.error(err);
        }
        catch (_e) {
          return exits.error(err||_e);
        }
      },
      notADir: exits.notADir,
      noSuchDir: exits.noSuchDir,
      success: function (bufferedOutput){
        return exits.success(pkgData);
      }
    });
  }
});