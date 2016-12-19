var helper = require("../lib/helper.js")
  , stream;

if (inputs.source && inputs.destination) {
  stream = helper.read(inputs.source)
    .pipe( helper.convert(inputs) )
    .pipe( helper.write(inputs.destination) )
    .on('close', inputs.done);

} else if (inputs.source) {
  stream = helper.read(inputs.source)
    .pipe( helper.convert(inputs) )

} else if (inputs.destination) {
  stream = process.stdin
    .pipe( helper.convert(inputs) );
  //need to separate this pipe for working.
  stream
    .pipe( helper.write(inputs.destination) )
    .on('close', inputs.done);

}

return exits.success( stream||helper.convert(inputs) );