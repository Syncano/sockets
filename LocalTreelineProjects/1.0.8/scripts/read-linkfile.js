var path = require('path');
var Filesystem = require('machinepack-fs');

// Ensure we have an absolute destination path.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

// Read and parse JSON file located at source path on disk into usable data.
Filesystem.readJson({
  source: path.join(inputs.dir, 'treeline.json'),
  schema: {
    id: '123',
    identity: 'my-cool-app',
    displayName: 'My Cool App',
    type: 'app',
    owner: 'mikermcneil',
    hashes: {}
  }
}).exec(exits);