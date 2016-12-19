var Proc = require('machinepack-process');
var cmd = 'npm unpublish '+inputs.packageName+(inputs.version?('@'+inputs.version):' --force');
Proc.spawn({
  command: cmd
}).exec({
  error: function (err){
    return exits.error(err);
  },
  success: function (bufferedOutput){
    return exits.success();
  }
});