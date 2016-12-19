var path = require('path');
var Filesystem = require('machinepack-fs');

// Ensure we have an absolute destination path.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

// Write the new JSON file.
Filesystem.writeJson({
  destination: path.join(inputs.dir, 'treeline.json'),
  force: true,
  json: {
    id: inputs.id,
    identity: inputs.identity,
    displayName: inputs.displayName,
    type: inputs.type,
    owner: inputs.owner,
    hashes: inputs.hashes || {}
  }
}).exec(exits);