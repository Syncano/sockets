if (inputs.stream && require('isstream')(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});
try {
  return exits.success( (inputs.stream||process.stdin).pipe(require('fs').createWriteStream(inputs.path)) );
} catch (err) {
  return exits.error(err);
}