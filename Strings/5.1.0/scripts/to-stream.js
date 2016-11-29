var string__ = new require('stream').Readable();
string__._read = function () {};
string__.push(inputs.string);
string__.push(null);
return exits.success(string__);