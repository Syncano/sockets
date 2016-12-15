env.sails.sockets.blast(
  inputs.eventName || 'message',
  inputs.data || null
);
return exits.success();