var Path = require('path');
var Machine = require('machine');
var Filesystem = require('machinepack-fs');

var machinepackPath = Path.resolve(process.cwd(), inputs.dir);
var packageJsonPath = Path.resolve(machinepackPath, 'package.json');

Filesystem.read({
  source: packageJsonPath
}).exec({
  error: function (err){
    return exits.error(err);
  },
  doesNotExist: function (){
    return exits.notMachinepack();
  },
  success: function (jsonString){

    // Parse machinepack metadata from its package.json string.
    try {
      var machinepackMetadata = Machine.build(require('./parse-machinepack-metadata')).configure({
        json: jsonString,
      }).execSync();

      return exits.success(machinepackMetadata);
    }
    catch (e) {
      return exits(e);
    }
  }
});