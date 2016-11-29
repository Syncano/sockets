/**
 * Module dependencies
 */

var Path = require('path');
var _ = require('lodash');
var Filesystem = require('machinepack-fs');
var Machine = require('machine');
var _buildMachineCode = Machine.build(require('./build-machine-code'));


// Build the code string that will be written to disk
_buildMachineCode({
  friendlyName: inputs.friendlyName,
  description: inputs.description,
  extendedDescription: inputs.extendedDescription,
  moreInfoUrl: inputs.moreInfoUrl,
  inputs: inputs.inputs,
  exits: inputs.exits,
  cacheable: inputs.cacheable,
  sync: inputs.sync,
  idempotent: inputs.idempotent
}).exec({
  error: function (err){
    return exits.error(err);
  },
  success: function (codeStr){

    // Generate a file on the local filesystem using the specified utf8 string as its contents.
    Filesystem.write({
      string: codeStr,
      destination: inputs.destination,
      force: false
    }).exec({

      error: function (err){
        return exits.error(err);
      },

      // Something already exists at the specified path (overwrite by enabling the `force` input)
      alreadyExists: function (){
        return exits.alreadyExists(new Error('Something already exists at '+inputs.destination));
      },

      success: function (){
        return exits.success();
      }
    });
  }
});