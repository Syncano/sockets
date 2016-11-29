var helper = require("../lib/helper.js");

if (helper.isStream(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});

var stream = helper.decryptStream(inputs.stream, inputs.secret, exits.errorUnzip);

if (inputs.save){
  stream.pipe(fs.createWriteStream(inputs.path+".gz"));
}

// Return an a crypted stream
return exits.success({
  stream: stream
});