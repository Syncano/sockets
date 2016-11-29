var path = require('path');
var Filesystem = require('machinepack-fs');
var IfThen = require('machinepack-ifthen');
var thisPack = require('../');

// The path to the project is generally the current working directory
// Here, we ensure is is absolute, and if it was not specified, default
// it to process.cwd(). If it is relative, we resolve it from the current
// working directory.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

// If `inputs.type` was provided, use it.
// Otherwise, sniff around for the package.json/treeline.json files
// to figure out what kind of project this is.
IfThen.ifThenFinally({

  bool: !inputs.type,

  expectedOutput: 'app or pack',

  then: function (_i, _exits){

    // Read and parse the linkfile
    thisPack.readLinkfile({
      dir: inputs.dir
    }).exec(function (err, linkedProjectInfo){
      if (err) {return _exits.error();}
      return _exits.success(linkedProjectInfo.type);
    });

  },

  orElse: function (__, _exits) {
    return _exits.success(inputs.type);
  }

}).exec({

  error: exits.error,

  success: function (type){

    // Link either an app or a machinepack
    switch (type.toLowerCase()) {
      case 'machinepack':
      case 'pack':
      case 'p':
        return exits.success('machinepack');

      case 'a':
      case 'ap':
      case 'app':
        return exits.success('app');

      default:
        return exits.unknownType();
    }
  }

});