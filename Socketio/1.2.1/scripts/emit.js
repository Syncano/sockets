env.sails.sockets.emit(
  inputs.socketIds,
  inputs.eventName || 'message',
  inputs.data || null
);
return exits.success();