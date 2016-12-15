var _ = require('lodash');
var rttc = require('rttc');

try {
  rttc.validateStrict(inputs.typeSchema, inputs.value);
}
catch (e) {
  // Generally, the is E_INVALID_TYPE.
  if (e.code === 'E_INVALID_TYPE') {
    var errors = _.reduce(e.errors, function (memo,subErr){
      // TODO: do this in rttc itself instead of here.
      memo.push({
        code: subErr.code,
        expected: subErr.expected,
        actual: subErr.actual,
        keypath: subErr.inputKey
      });
      return memo;
    }, []);
    return exits.invalid(errors);
  }
  // Otherwise this is some unknown error.
  else return exits.error(e);
}

return exits.success();