var path = require('path');
var fsx = require('fs-extra');

// In case we ended up w/ a relative path, make it absolute.
inputs.path = path.resolve(inputs.path);

fsx.ensureDir(inputs.path, function(err) {
  if (err) {return exits.error(err);}
  return exits.success();
});