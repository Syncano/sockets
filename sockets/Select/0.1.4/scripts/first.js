if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
var first = inputs.shift ? inputs.collection.shift() : inputs.collection[0];
if (inputs.both)
  return exits.success({
    first: first,
    collection: inputs.collection
  });
else
  return exits.success(first);