if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
var end = inputs.collection.length;
return exits.success(inputs.collection.slice(end-inputs.num, end));