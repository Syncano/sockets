var result;
if (isNaN(inputs.index)) return exits.error();
inputs.index = inputs.index * 1.0;
if (!Array.isArray(inputs.array)) result=JSON.parse(inputs.array)[inputs.index];
    else result=inputs.array[inputs.index];

return exits.success(result);