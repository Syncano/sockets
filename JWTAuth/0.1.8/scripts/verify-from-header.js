var jwtMachine = require('machinepack-jwt');

var headerVal = env.req.get(inputs.header);
var decodeParams = {secret:inputs.secret};

if(headerVal){ //Check that value exists for header
  if(inputs.algorithm){ //Add algorithm if it exists
    decodeParams.algorithm = inputs.algorithm;
  }
  if(inputs.headerPrefix){ //Remove prefix from header if headerPrefix exists
    headerVal.replace(inputs.headerPrefix, ""); //Remove prefix to leave token string
  }
  
  decodeParams.token = headerVal;

  try{
    return exits.success(jwtMachine.decode(decodeParams));
  } catch(err){
    return exits.error(err);
  }
}
return exits.nullHeader(); //Header does not exist