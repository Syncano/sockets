if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
var rdm = Math.floor(Math.random() * ( inputs.collection.length - inputs.num ));
var sample = inputs.collection.splice(rdm, inputs.num);

if (inputs.both)
  return exits.success({
    sample: sample,
    collection: inputs.collection
  });
else
  return exits.success(sample);