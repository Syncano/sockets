var child_process = require('child_process');
var readline = require('readline');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var command;

command = 'node ' + cliPath + ' account download ';

child_process.exec(command, function (err, stdout) {

  if(err){
    return exits.error(err);
  }
  rl.question("Please enter the location of your .publishsettings file: ", function(answer) {

    var fs = require('fs');

    if(!fs.existsSync(answer)){
      return exits.success('file: ' + answer + ' does not exist!');
    }

    //close the interface
    rl.close();

    //import the the interface
    var command = 'node ' + cliPath + ' account import ' + answer;
    console.log('command:',command);
    child_process.exec(command, function (err, stdout) {

      if(err){
        return exits.error(err);
      }

      return exits.success(stdout);
    });

  });
});