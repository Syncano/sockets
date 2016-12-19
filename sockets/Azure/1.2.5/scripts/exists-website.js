var child_process = require('child_process');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var _ = require('lodash');
var command = 'node ' + cliPath + ' site list --json';

child_process.exec(command, function (err, stdout) {

  if(err){
    return exits.error(err);
  }

  var listedSites = JSON.parse(stdout);
  var search = _.findWhere(listedSites, {'name': inputs.name})

  if(search){
    return exits.success(true);
  }
  else{
    return exits.success(false);
  }
});