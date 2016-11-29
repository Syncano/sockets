var _ = require('lodash');
var Javascript = require('machinepack-javascript');
var Machine = require('machine');

/**
 * Helper function for stringifying objects in compiled code-- could probably be extrapolated
 * and combined with other similar functions to be more DRY or whatever.
 *
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function compileObj(obj) {

  var util = require('util');
  var _ = require('lodash');

  if (!_.isObject(obj)) {
    throw new Error('Expecting object, but got:', util.inspect(obj));
  }

  var str;
  if (_.isArray(obj)) {
    str = '[
';
    str += _.reduce(obj, function(memo, val) {
      var str = '';
      if (typeof val == 'object' && val !== null) {
        str += compileObj(val);
      } else {
        str += JSON.stringify(val);
      }
      memo.push(str);
      return memo;
    }, []).join(',
');
    str += ']';
  } else {
    str = '{
';
    str += _.reduce(obj, function(memo, val, key) {
      var str;
      if (val.__varName__) {
        str = '\'' + val.__varName__ + '\': ';
        delete val.__varName__;
      } else {
        str = '\'' + key + '\': ';
      }
      if (typeof val == 'object') {
        str += compileObj(val);
      } else if (['getExample', 'validate', 'fn'].indexOf(key) > -1) {
        str += val;
      } else {
        str += JSON.stringify(val);
      }
      memo.push(str);
      return memo;
    }, []).join(',
');
    str += '}
';
  }
  return str;
}

var code = 'var Machine = require(\'machine\');
';
code += 'var asAction = require(\'machine-as-action\');
';
code += 'var thisApp = require(\'../../index\');
';
code += 'module.exports = {
';
code += _.reduce(inputs.actionTargets, function(memo, actionTarget) {
  var actionCode = '';
  actionCode += '\'' + actionTarget.action + '\': asAction({';

  // Build `machine` option
  actionCode += 'machine: thisApp.' + Machine.getMethodName(actionTarget.machine.identity);

  // Build `files` option, if relevant
  if (actionTarget.files.length > 0) {
    actionCode += ',files: ' + compileObj(actionTarget.files);
  }

  // Build `responses` option, if relevant
  if (_.compact(_.values(actionTarget.responses)).length > 0) {
    actionCode += ',responses: ' + compileObj(actionTarget.responses);
  }
  actionCode += '})'; // </asAction()>

  // Push code for this action onto the array being built up
  memo.push(actionCode);
  return memo;
}, []).join(',');
code += '};';

return exits.success(Javascript.beautify({code: code}).execSync());