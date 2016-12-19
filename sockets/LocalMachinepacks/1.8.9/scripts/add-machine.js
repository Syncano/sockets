/**
 * Module dependencies
 */

var Path = require('path');
var _ = require('lodash');
var Filesystem = require('machinepack-fs');
var Machine = require('machine');


// Determine the appropriate location for the new machine
Machine.build(require('./get-machines-dir'))({
  dir: inputs.machinepackRootPath
}).exec({
  error: function (err) {
    return exits.error(err);
  },
  success: function (machinesDirpath){

    var outputPath = Path.resolve(machinesDirpath, inputs.identity+'.js');

    Machine.build(require('./write-machine-file'))({
      destination: outputPath,
      friendlyName: inputs.friendlyName,
      description: inputs.description,
      extendedDescription: inputs.extendedDescription,
      moreInfoUrl: inputs.moreInfoUrl,
      cacheable: inputs.cacheable,
      sync: inputs.sync,
      idempotent: inputs.idempotent,
      inputs: inputs.inputs,
      exits: inputs.exits,
    }).exec({

      error: function (err){
        return exits.error(err);
      },

      // Something already exists at the specified path (overwrite by enabling the `force` input)
      alreadyExists: function (){
        return exits.alreadyExists(new Error('Something already exists at '+outputPath));
      },

      success: function (){

        // Determine path to package.json file.
        var packageJsonPath = Path.resolve(inputs.machinepackRootPath, 'package.json');

        // Read contents of package.json file
        Filesystem.readJson({
          source: packageJsonPath,
          schema: {}
        }).exec({
          error: function (err){
            return exits.error(err);
          },
          success: function (jsonData){

            // Modify package.json, adding the new machine we're generating.
            try {
              jsonData.machinepack.machines = _.union(jsonData.machinepack.machines, [inputs.identity]);
            }
            catch (e) {
              return exits.error(e);
            }

            // Rewrite contents of package.json file
            Filesystem.writeJson({
              json: jsonData,
              destination: packageJsonPath,
              force: true
            }).exec({
              error: function (err){
                return exits.error(err);
              },
              success: function (){
                return exits.success();
              }
            });
          }
        });
      }
    });
  }
});