var sender;
try {
    sender = new Sender(inputs.type, inputs.connectionOptions);
}
catch (ex) {
    return exits.error(ex);
}

try {
    sender.send(inputs.message, inputs.deviceToken);
}
catch (ex) {
    return exits.error(ex);
}

return exits.success();