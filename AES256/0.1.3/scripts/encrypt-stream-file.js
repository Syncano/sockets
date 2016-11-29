var helper = require("../lib/helper.js");
var fs = require("fs");
if (require('exists-sync')(inputs.path) !== true)
  return exits.errorFileNotFind();

var stream = helper.encryptStream(fs.createReadStream(inputs.path), inputs.secret);

if (inputs.save){
  stream.pipe(fs.createWriteStream(inputs.path+".gz"));
}

return exits.success({
  stream: stream,
  path: inputs.save ? inputs.path+".gz" : inputs.path
});