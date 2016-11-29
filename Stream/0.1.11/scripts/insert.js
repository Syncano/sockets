if (inputs.stream && require('isstream')(inputs.stream) !== true)
  return exits.errorNotStream({error: "It's not a valid stream"});

var Transform = require('stream').Transform
  , util = require('util');

var InsertStream = function() {
  if ( !(this instanceof InsertStream) )
    return( new InsertStream() );
  Transform.call(this, {objectMode: true});
};
util.inherits(InsertStream, Transform);

var transformer = function(str, val, by, before){
  var res = str+"";
  if (util.isArray(val)) {
    for(var i=0,len=val.length; i<len; i++){
      res = res.split(val[i]).join(
        before ? by + val[i] : val[i] + by
      );
    }
  } else
    res = res.split(val).join(before ? by + val : val + by);
  return res;
}

InsertStream.prototype._transform = function(chunk, encoding, callback) {
  var str = chunk.toString();
  if (inputs.before)
    str = transformer(str, inputs.before, inputs.text, true );
  if (inputs.after)
    str = transformer(str, inputs.after, inputs.text );
  this.push(str);
  callback();
};

try {
  return exits.success( inputs.stream ? inputs.stream.pipe(new InsertStream()) : new InsertStream())
} catch (err) {
  return exits.error(err);
}