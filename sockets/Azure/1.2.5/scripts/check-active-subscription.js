var child_process = require('child_process');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var command;

command = 'node ' + cliPath + ' account list ';
child_process.exec(command, function (err, stdout) {

  if(err){
    return exits.error(err);
  }

  if(stdout.indexOf('  true') > -1){
    return exits.success(true);
  }
  else{
    return exits.success(false);
  }
});