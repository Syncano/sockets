env.sails.sockets.broadcast(
  inputs.roomName,
  inputs.eventName || 'message',
  inputs.data || null
);
return exits.success();