var path = require('path');
var fsx = require('fs-extra');

// Ensure absolute paths.
inputs.source = path.resolve(inputs.source);
inputs.destination = path.resolve(inputs.destination);

fsx.move(inputs.source, inputs.destination, function (err) {
  if (err) {
    if (err.code === 'ENOENT') {
      return exits.doesNotExist();
    }
    return exits.error(err);
  }
  return exits.success();
});