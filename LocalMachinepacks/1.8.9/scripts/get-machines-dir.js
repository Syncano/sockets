var Path = require('path');

require('machine').build(require('./read-package-json'))
.configure({
  dir: inputs.dir
}).exec({
  error: exits.error,
  notMachinepack: exits.notMachinepack,
  success: function (machinepack){
    return exits.success(Path.resolve(inputs.dir, machinepack.machineDir));
  }
});