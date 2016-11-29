if (inputs.stream && require('isstream')(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});
try {
  return exits.success( inputs.stream ? inputs.stream.pipe(require('zlib').createGunzip()) : require('zlib').createGunzip())
} catch (err) {
  return exits.error(err);
}