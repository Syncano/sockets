var util = require('util');
var rttc = require('rttc');
var _ = require('lodash');
var Javascript = require('machinepack-javascript');

// Wrap any `getExample` function strings in a function wrapper, and convert
// to a real js function.
try {
  inputs.exits = _.mapValues(inputs.exits, function (exitDef, exitId){
    if (_.isString(exitDef.getExample)) {
      exitDef.getExample = new Function('inputs','env', exitDef.getExample);
    }
    // Never include an `example` (or a substitute like `itemOf`) if this is the `error` exit
    // and also make sure it's never `void`.
    // (that's because it smashes the error instance and therefore the stack trace!)
    if (exitId === 'error') {
      delete exitDef.void;
      delete exitDef.example;
      delete exitDef.like;
      delete exitDef.itemOf;
      delete exitDef.getExample;
    }
    return exitDef;
  });
}
catch (e){
  return exits.couldNotParseFnInsideExit(e);
}

// Wrap any `validate` or `defaultsTo` function strings in a function wrapper,
// and convert to a real js function.
try {
  inputs.inputs = _.mapValues(inputs.inputs, function (inputDef, inputId){
    if (_.isString(inputDef.validate)) {
        inputDef.validate = new Function('inputs','env', inputDef.validate);
    }

    // Hydrate any functions in the `defaultsTo`:
    if (inputDef.defaultsTo) {
      inputDef.defaultsTo = rttc.hydrate(inputDef.defaultsTo, rttc.infer(inputDef.example));
    }

    return inputDef;
  });
}
catch (e){
  return exits.couldNotParseFnInsideInput(e);
}

// Parse encoded `fn` to a real JavaScript function, then `toString` it again.
var fn;
if (inputs.fn) {
  try {
    fn = new Function('inputs', 'exits', 'env', inputs.fn);
    fn = fn.toString().replace(/anonymous/, '').replace(/
/g,'
  ');
  }
  catch (e){
    return exits.couldNotParseFn(e);
  }
}
else {
  fn = new Function('inputs', 'exits', util.format('  return exits.%s();', 'success'));
  fn = fn.toString().replace(/anonymous/, '').replace(/
/g,'
  ');
}
// console.log('*********** BUILDING MACHINE CODE ************',util.inspect(inputs,{depth:null}));

var code = 'module.exports = {


';
code += util.format('  friendlyName: %s,


', util.inspect(inputs.friendlyName));
code += util.format('  description: %s,


', util.inspect(inputs.description));
if (!_.isUndefined(inputs.extendedDescription)) {
  code += util.format('  extendedDescription: %s,


', util.inspect(inputs.extendedDescription||''));
}
if (!_.isUndefined(inputs.moreInfoUrl)) {
  code += util.format('  moreInfoUrl: %s,


', util.inspect(inputs.moreInfoUrl||''));
}
if (!_.isUndefined(inputs.cacheable)) {
  code += util.format('  cacheable: %s,


', util.inspect(inputs.cacheable));
}
if (!_.isUndefined(inputs.sync)) {
  code += util.format('  sync: %s,


', util.inspect(inputs.sync));
}
if (!_.isUndefined(inputs.idempotent)) {
  code += util.format('  idempotent: %s,


', util.inspect(inputs.idempotent));
}
if (!_.isUndefined(inputs.environment)) {
  code += util.format('  environment: %s,


', util.inspect(inputs.environment));
}
code += util.format('  inputs: {%s

  },


', _.reduce(inputs.inputs||{}, function (memo, def, name){
  memo += util.format('

    %s: {%s
    },', name, _.reduce(def, function (submemo, value, key){
    submemo += util.format('
      %s: %s,', key, rttc.compile(value));
    return submemo;
  },''));
  return memo;
}, '')); //util.inspect(inputs.inputs||{}, false, null).replace(/
/g,'

  '));
code += util.format('  exits: {%s

  },


', _.reduce(inputs.exits||{}, function (memo, def, name){
  memo += util.format('

    %s: {%s
    },', name, _.reduce(def, function (submemo, value, key){
    if (key == 'getExample') {
      submemo += util.format('
      getExample: %s,', value.toString());
    } else {
      submemo += util.format('
      %s: %s,', key, rttc.compile(value));
    }
    return submemo;
  },''));
  return memo;
}, ''));
// code += util.format('  exits: %s,


', util.inspect(inputs.exits||{success: {}, error: {}}, false, null).replace(/
/g,'

  '));
code += util.format('  fn: %s,


', fn);
code += '
};
';

code = Javascript.beautify({code: code}).execSync();

return exits.success(code);