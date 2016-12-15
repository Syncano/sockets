var _ = require("lodash")
  , helper = require("../lib/helper.js")
  , stream
  , first;

//we store a first stream
first = inputs.schema.shift();
stream = helper.read(inputs.source)
  .pipe( helper.convert(first) );

//simply enqueue other schema
for(var i=0, len=inputs.schema.length; i<len; i++) {
  _.assign(inputs.schema[i], {source: inputs.source});
}
helper.enqueue(stream, inputs.schema, inputs.done);

//end with the first stream
stream
  .pipe( helper.write( helper.dest(inputs.source, first.name)) );

return exits.success(stream);