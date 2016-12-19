var path = require('path');
var Arrays = require('machinepack-arrays');
var JSON = require('machinepack-json');
var Util = require('machinepack-util');
var thisPack = require('../');
var LocalMachinepacks = require('machinepack-localmachinepacks');

// Resolve absolute path
inputs.dir = path.resolve(process.cwd(), inputs.dir);

LocalMachinepacks.getSignature({
  dir: inputs.dir
}).exec(exits);