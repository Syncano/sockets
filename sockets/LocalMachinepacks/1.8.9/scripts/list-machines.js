require('machine').build(require('./read-package-json'))
.configure({
  dir: inputs.dir
}).exec({
  error: exits.error,
  notMachinepack: exits.notMachinepack,
  success: function (machinepack){
    // Return list of machines, sorted alphabetically for easier reading
    var machineIdentities = machinepack.machines.sort();
    return exits.success(machineIdentities);
  }
});