var helper = require("../lib/helper.js");

if (helper.isStream(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});

// Return an a crypted stream
return exits.success({
  stream: helper.encryptStream(inputs.stream, inputs.secret)
});