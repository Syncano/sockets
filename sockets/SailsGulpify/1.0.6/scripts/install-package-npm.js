var path = require('path'),
  npm = require('machinepack-npm');

npm.installPackage({
  name: inputs.name,
  version: inputs.version,
  dir: path.resolve(__dirname, inputs.dir),
  //dir: path.resolve(__dirname, '../../../node_modules'),
  save: inputs.save,
  loglevel: inputs.loglevel
}).exec({
  // An unexpected error occurred.
  error: function (err){
    console.error('an error occurred- error details:',err);
    return exits.error();
  },
  // Provided semver range is invalid. See https://docs.npmjs.com/misc/semver for more information.
  invalidSemVer: function (){
    return exits.invalidSemVer();
  },
  // OK.
  success: function (){
    console.log('Installed '+inputs.name);
    return exits.success();
  }
});