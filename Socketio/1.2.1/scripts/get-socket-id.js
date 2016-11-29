if (!env.req.isSocket){
  return exits.reqNotCompatible();
}
return exits.success(env.sails.sockets.id(env.req.socket));