if (inputs.stream && require('isstream')(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});

var MinifyStream = require('../lib/stream-transformer.js').simple()
  , minify = require('html-minifier').minify;

try {
  var mstream = new MinifyStream(minify);
  return exits.success( inputs.stream ? inputs.stream.pipe(mstream) : mstream);
} catch (err) { return exits.error(err); }