var _ = require('lodash');
var rttc = require('rttc');

// These variables will be sent back in the return value below.
var errors = [];


if (inputs.ensureCacheable) {
  // Check that the machine def sets `cacheable: true`
  if (!inputs.machineDef.cacheable) {
    errors.push({
      message: 'Machine definition is not `cacheable`.',
      problem: 'machineNotCacheable',
      machineId: inputs.machineDef.id
    });
  }
}

// Loop over machine exits and ensure they are not malformed.
_.each(inputs.machineDef.exits||[], function (exitDef){

  // Make sure all exits have an id.
  if (!exitDef.id) {
    errors.push({
      message: 'Exit definition is missing an `id`',
      details: 'Here is the exit definition: '+rttc.compile(exitDef),
      problem: 'machineExitHasNoId',
      machineId: inputs.machineDef.id,
    });
  }
});




// If configured to do so, ensure the success exit has output.
if (inputs.ensureSuccessOutput) {

  var successExitDef = _.find(inputs.machineDef.exits||[], { id: inputs.successExitId });

  // Make sure the machine def has a success exit
  if (!successExitDef){
    errors.push({
      message: 'Machine definition has no success exit.',
      problem: 'machineHasNoSuccessExit',
      machineId: inputs.machineDef.id
    });
  }
  // An exit def should never have BOTH an `outputExample` and a getExample().
  else if (!(_.isUndefined(successExitDef.outputExample) || _.isNull(successExitDef.outputExample)) && _.isFunction(successExitDef.getExample)){
    errors.push({
      message: 'Machine\'s success exit is ambiguous--it has both an `outputExample` and a `getExample()`.',
      problem: 'machineExitHasBothExampleAndGetExample',
      exitId: successExitDef.id,
      machineId: inputs.machineDef.id,
    });
  }
  // If that exit def has neither an `outputExample`, `like`, `itemOf`, nor `getExample`, report an error.
  else if (
    (_.isUndefined(successExitDef.outputExample) || _.isNull(successExitDef.outputExample)) &&
    (_.isUndefined(successExitDef.like) || _.isNull(successExitDef.like)) &&
    (_.isUndefined(successExitDef.itemOf) || _.isNull(successExitDef.itemOf)) &&
    !_.isFunction(successExitDef.getExample)) {
    errors.push({
      message: 'Machine\'s success exit def has neither an `outputExample`, `like`, `itemOf`, nor a `getExample` function.',
      machineId: inputs.machineDef.id,
      problem: 'machineExitHasNeitherExampleNorGetExample',
      exitId: successExitDef.id,
    });
  }
}


// Loop over machine inputs and ensure they are not malformed.
_.each(inputs.machineDef.inputs||[], function (inputDef){

  // Ensure `defaultsTo` and `required` are not both set
  if (!_.isUndefined(inputDef.defaultsTo) && inputDef.required) {
    errors.push({
      message: 'Input definition in machine specifies BOTH `required` and `defaultsTo`-- but this is not allowed.',
      problem: 'machineInputIsRequiredAndDefaultsTo',
      inputId: inputDef.id,
      machineId: inputs.machineDef.id,
    });
  }

  // Make sure machine has a valid input example
  if (rttc.isInvalidExample(inputDef.example)) {
    errors.push({
      message: 'Input definition in machine specifies an invalid example.',
      problem: 'machineHasInvalidInputExample',
      inputId: inputDef.id,
      machineId: inputs.machineDef.id,
    });
  }

  // Ensure that, if present, `defaultsTo` validates against the input example.
  if (!_.isUndefined(inputDef.defaultsTo)) {
    try {
      rttc.validateStrict(rttc.infer(inputDef.example), inputDef.defaultsTo);
    }
    catch (e) {
      if (e.code === 'E_INVALID') {
        errors.push({
          message: 'Input definition in machine specifies a `defaultsTo` which fails validation against its own `example`.',
          problem: 'machineInputHasInvalidDefaultsTo',
          inputId: inputDef.id,
          machineId: inputs.machineDef.id,
          validationErrors: _.map(e.errors, function (err){
            return {
              actual: err.actual,
              expected: err.expected,
              keyName: err.keyName
            };
          }),
        });
      }
      else {
        errors.push({
          problem: 'unexpected',
          details: e.stack,
          inputId: inputDef.id,
          machineId: inputs.machineDef.id,
        });
      }
    }
  }
});


// We'll exit "success", but send back the set of errors as our result.
return exits.success(errors);