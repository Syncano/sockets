var Proc = require('machinepack-process');

Proc.spawn({
  command: 'npm access restricted '+inputs.packageName
}).exec({
  error: function (err){
    try {
      if (err.message.match(/Sorry, you can\'t change the access level of unscoped packages/i)) {
        return exits.unscopedPackage();
      }
    }
    catch (_e){}
    return exits.error(err);
  },
  success: function (bufferedOutput){
    return exits.success();
  }
});