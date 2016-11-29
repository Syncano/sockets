var rttc = require('rttc');

var coerced = rttc.coerce(inputs.typeSchema, inputs.value);
return exits.success(coerced);