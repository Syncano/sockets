if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
var last = inputs.pop ? inputs.collection.pop() : inputs.collection[inputs.collection.length-1];
if (inputs.both)
  return exits.success({
    last: last,
    collection: inputs.collection
  });
else
  return exits.success(last);