var path = require('path');
var fsx = require('fs-extra');

fsx.copy(path.resolve(inputs.source), path.resolve(inputs.destination), function (err) {
  if (err) {
    if (err.code === 'ENOENT') {
      return exits.doesNotExist();
    }
    return exits.error(err);
  }
  return exits.success();
});