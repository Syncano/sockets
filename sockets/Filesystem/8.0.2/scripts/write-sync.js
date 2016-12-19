var path = require('path');
var fs = require('fs');
var fsx = require('fs-extra');

// In case we ended up here w/ a relative path,
// resolve it using the process's CWD
inputs.destination = path.resolve(inputs.destination);

// Only override an existing file if `inputs.force` is true
if (inputs.force) {
  fsx.outputFileSync(inputs.destination, inputs.string);
  return exits.success();
}

// Otherwise don't override existing files.
if (fs.existsSync(inputs.destination)) {
  // TODO: Some time before fs.existsSync() is deprecated in
  // Node core, switch this to use a different strategy.
  // See `https://nodejs.org/api/fs.html#fs_fs_exists_path_callback`
  return exits.alreadyExists();
}
fs.writeFileSync(inputs.destination, inputs.string);
return exits.success();