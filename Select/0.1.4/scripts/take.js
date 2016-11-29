if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
return exits.success(inputs.collection.slice(0, inputs.num));