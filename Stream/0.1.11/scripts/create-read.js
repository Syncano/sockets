var fs = require('fs'),
  util = require('util');
if (inputs.path && !fs.existsSync(inputs.path))
  return exits.pathError();
else if (!inputs.text)
  inputs.text = '';

try {
  return exits.success(
    inputs.path
    ?
    fs.createReadStream(inputs.path)
    :
    require('resumer')().queue(inputs.text).end()
  );
} catch (err) { return exits.error(err); }