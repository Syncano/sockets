var Path = require('path');
var _ = require('lodash');
var Filesystem = require('machinepack-fs');
var _getMachinesDir = require('machine').build(require('./get-machines-dir'));

var machinepackPath = Path.resolve(process.cwd(), inputs.dir);
var packageJsonPath = Path.resolve(machinepackPath, 'package.json');


_getMachinesDir({
  dir: machinepackPath
}).exec({
  error: function (err){
    return exits.error(err);
  },
  success: function (pathToMachines){

    Filesystem.mv({
      source: Path.resolve(pathToMachines, inputs.originalIdentity+'.js'),
      destination: Path.resolve(pathToMachines, inputs.newIdentity+'.js')
    }).exec({

      error: function (err){
        return exits.error(err);
      },

      success: function (){

        Filesystem.readJson({
          source: packageJsonPath,
          schema: {}
        }).exec({
          error: function (err){
            return exits.error(err);
          },
          success: function (jsonData){
            try {
              jsonData.machinepack.machines = _.difference(jsonData.machinepack.machines, [inputs.originalIdentity]);
              jsonData.machinepack.machines = _.union(jsonData.machinepack.machines, [inputs.newIdentity]);
            }
            catch (e) {
              return exits.error(e);
            }
            Filesystem.writeJson({
              json: jsonData,
              destination: packageJsonPath,
              force: true
            }).exec({
              error: function (err){
                return exits.error(err);
              },
              success: function (){
                // Done.
                return exits.success();
              }
            });
          }
        });
      },
    });
  }
});