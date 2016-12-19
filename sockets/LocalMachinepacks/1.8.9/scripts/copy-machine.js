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
    console.error('Unexpected error occurred:
',err);
  },
  success: function (pathToMachines){

    Filesystem.cp({
      source: Path.resolve(pathToMachines, inputs.originalIdentity+'.js'),
      destination: Path.resolve(pathToMachines, inputs.newIdentity+'.js')
    }).exec({

      error: function (err){
        console.error('Unexpected error occurred:
',err);
      },

      success: function (){

        Filesystem.readJson({
          source: packageJsonPath,
          schema: {}
        }).exec({
          error: function (err){
            console.error('Unexpected error occurred:
',err);
          },
          success: function (jsonData){
            try {
              jsonData.machinepack.machines = _.union(jsonData.machinepack.machines, [inputs.newIdentity]);
            }
            catch (e) {
              console.error('Unexpected error occurred:
',err);
              return;
            }
            Filesystem.writeJson({
              json: jsonData,
              destination: packageJsonPath,
              force: true
            }).exec({
              error: function (err){
                console.error('Unexpected error occurred:
',err);
              },
              success: function (){
                // Done.
                console.log('Copied: `%s` to new machine: `%s`', inputs.originalIdentity, inputs.newIdentity);
              }
            });
          }
        });
      },
    });
  }
});