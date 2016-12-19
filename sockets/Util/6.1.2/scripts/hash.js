var hashFn = require('object-hash');
var hash = hashFn(inputs.value);
return exits.success(hash);