var Proc = require('machinepack-process');

Proc.spawn({
  command: 'npm access public '+inputs.packageName
}).exec({
  error: function (err){
    return exits.error(err);
  },
  success: function (bufferedOutput){
    return exits.success();
  }
});