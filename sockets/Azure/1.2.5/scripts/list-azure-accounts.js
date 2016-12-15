var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var scripty = require('azure-scripty');

var command = {
  cmd: 'account list'
};

scripty.invoke(command, function (err, subscriptions) {

  if(err){
    return exits.error(err);
  }

  var output = [];
  for(var i in subscriptions){
    output.push({
      id: subscriptions[i].id,
      name: subscriptions[i].name
    });
  }

  return exits.success(output);
});