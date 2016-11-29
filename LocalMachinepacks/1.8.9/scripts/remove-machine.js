var Path = require('path');
var _ = require('lodash');
var Filesystem = require('machinepack-fs');
var _getMachinesDir = require('machine').build(require('./get-machines-dir'));

var machinepackPath = Path.resolve(process.cwd(), inputs.dir);
var packageJsonPath = Path.resolve(machinepackPath, 'package.json');

_getMachinesDir({
  dir: machinepackPath
}).exec({
  error: function(err) {
    return exits.error(err);
  },
  success: function(pathToMachines) {

    Filesystem.readJson({
      source: packageJsonPath,
      schema: {}
    }).exec({
      error: function(err) {
        return exits.error(err);
      },
      success: function(jsonData) {
        try {
          if (!_.contains(jsonData.machinepack.machines, inputs.identity)) {
            return exits.notFound();
          }
          jsonData.machinepack.machines = _.difference(jsonData.machinepack.machines, [inputs.identity]);
        }
        catch (e) {
          return exits.error(e);
        }

        // Completely remove a file or directory (like rm -rf).
        Filesystem.rmrf({
          dir: Path.resolve(pathToMachines, inputs.identity + '.js')
        }).exec({

          error: function(err) {
            return exits.error(err);
          },

          success: function() {

            Filesystem.writeJson({
              json: jsonData,
              destination: packageJsonPath,
              force: true
            }).exec({
              error: function(err) {
                return exits.error(err);
              },
              success: function() {
                return exits.success();
              }
            });
          }
        });
      },
    });
  }
});