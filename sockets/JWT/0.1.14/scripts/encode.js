var jwt = require('jsonwebtoken');
if(inputs.expires || inputs.algorithm){ //Options exist
  var options = {};
  if(inputs.algorithm){
    options.algorithm = inputs.algorithm;
  }
  if(inputs.expires){
    options.expires = inputs.expires;
  }
  return exits.success(jwt.sign(inputs.payload, inputs.secret, options));
}
else {
  return exits.success(jwt.sign(inputs.payload, inputs.secret));
}