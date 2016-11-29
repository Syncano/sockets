var helper = require("../lib/helper.js");
var fs = require("fs");

if (fs.existsSync(inputs.path) !== true)
  return exits.errorFileNotFind();

var stream = helper.decryptStream(fs.createReadStream(inputs.path), inputs.secret);

if (inputs.save){
  var newPath = inputs.path.slice(0, -3);
  console.log("newPath",newPath);
  stream.pipe(fs.createWriteStream(newPath));
}

return exits.success({
  stream: stream,
  path: inputs.save ? inputs.path.slice(0, -3) : inputs.path
});