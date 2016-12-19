var _ = require('lodash');
var child_process = require('child_process');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var uuid = require('uuid');
var defaults, command;

defaults = {
  name: uuid.v4(),
  location: 'West US',
};

_.defaults(inputs, defaults);

command = 'node ' + cliPath + ' site create --location "' + inputs.location + '" "' + inputs.name + '"';

child_process.exec(command, function (err, stdout) {
  if (err) {
      return exits.error(err);
  }
  return exits.success(stdout);
});