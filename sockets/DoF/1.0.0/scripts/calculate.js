// NOTE:
// No needs to null check 'inputs' as the input requirements are set per machine definition.
// There are also no needs to datatype check as machine will automatically pick up expecting datatype base
// on example value. More on inputs: http://node-machine.org/implementing/Understanding-Inputs

if(inputs.coc <= 0) {
    return exits.invalidInputParameter('Invalid coc supplied.');
}
if(inputs.focalLength <= 0) {
    return exits.invalidInputParameter('Invalid focalLength supplied.');
}
if(inputs.aperture <= 0) {
    return exits.invalidInputParameter('Invalid aperture supplied.');
}
if(inputs.focusDistance <= 0) {
    return exits.invalidInputParameter('Invalid focusDistance supplied.');
}
if(inputs.focusDistance < inputs.focalLength) {
    return exits.invalidInputParameter('focusDistance is smaller than focalLength.');
}

// Act
var hd = ((inputs.focalLength * inputs.focalLength) / (inputs.aperture * inputs.coc)) + inputs.aperture;
if(hd > inputs.focusDistance) {
    var near = (hd * inputs.focusDistance) / (hd + inputs.focusDistance);
    var far = (hd * inputs.focusDistance) / (hd - inputs.focusDistance);
} else {
    var near = hd / 2;
    var far = Infinity;
}

var output = {
    focusLimitNear: parseInt(near),
    focusLimitFar: parseInt(far),
    dof: isFinite(far) ? parseInt(far - near) : Infinity,
    hyperfocalDistance: parseInt(hd),
};

return exits.success(output);