var Path = require('path');
var fsx = require('fs-extra');

fsx.exists(Path.resolve(process.cwd(),inputs.path), function(exists) {
  if (!exists) {return exits.doesNotExist();}
  return exits.success();
});