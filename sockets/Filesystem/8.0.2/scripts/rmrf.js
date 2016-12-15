var path = require('path');
var fsx = require('fs-extra');

// Ensure absolute path.
inputs.path = path.resolve(inputs.path);

fsx.remove(inputs.path, function(err) {
  if (err) {return exits.error(err);}
  return exits.success();
});