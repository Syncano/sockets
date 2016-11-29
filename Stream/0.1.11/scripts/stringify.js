if (inputs.stream && require('isstream')(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});

var strm = inputs.stream || process.stdin
  , str = '';
strm.on('data', function(chunk){
  if (chunk !== null) {
    str += chunk.toString();
  }
});
strm.on('end', function(){
  return exits.success( str );
});
if (inputs.write) {
  var machine = require('machine')
    , streamWrite = machine.build(require('./create-write'));
  streamWrite({path:inputs.write, stream:inputs.stream}).execSync();
}