var child_process = require('child_process');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');

var command = 'node ' + cliPath + ' site deployment user set ' + inputs.deploymentUser + ' ' + inputs.deploymentPassword;
child_process.exec(command, function (err, stdout) {

  if(err){
    return exits.error(err);
  }

  return exits.success();
});