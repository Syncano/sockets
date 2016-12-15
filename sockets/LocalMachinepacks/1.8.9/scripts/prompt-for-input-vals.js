/**
 * Module dependencies
 */

var inquirer = require('inquirer');
var chalk = require('chalk');
var _ = require('lodash');
var Path = require('path');
var util = require('util');


// Build array of prompt objects for inquirer
var promptArray;
try {
  promptArray = _.reduce(inputs.prompts, function (memo, promptDef){
    var inquirerPromptDef = {
      name: promptDef.name,
      message: (
        ( promptDef.description ? chalk.reset('Please enter '+promptDef.description[0].toLowerCase()+promptDef.description.slice(1))
          : chalk.reset('Please enter a value for ')+chalk.bold(promptDef.name)
        ) +'
'+
        chalk.bold(promptDef.name)+': '
      ),
        // chalk.reset(chalk.gray(promptDef.description?'  '+(promptDef.description[0].toLowerCase()+promptDef.description.slice(1))+'':''))+'
'+chalk.bold(promptDef.name)+': ',
      // message: util.format(chalk.reset('Please enter a value for ')+'%s', chalk.bold(promptDef.name) + chalk.reset(chalk.gray(promptDef.description?'  '+(promptDef.description[0].toLowerCase()+promptDef.description.slice(1))+'':''))+'
'+chalk.bold(promptDef.name)+': '),
      // message: util.format('%s', promptDef.name, chalk.reset(chalk.gray(promptDef.description?', '+(promptDef.description[0].toLowerCase()+promptDef.description.slice(1))+'':'')), (promptDef.example?('
(e.g. '+promptDef.example+')'):''),'
?'),
      // message: util.format('Please enter a value for "%s"', promptDef.name, chalk.reset(chalk.gray(promptDef.description?', '+(promptDef.description[0].toLowerCase()+promptDef.description.slice(1))+'':'')), '
?'),
      type: (function (){
        if (promptDef.expectType === 'string') {
          return 'input';
        }
        if (promptDef.expectType === 'password') {
          return 'password';
        }
        if (promptDef.expectType === 'json') {
          return 'input';
        }
        throw new Error('Unexpected `expectType` for prompt: '+promptDef.expectType);
      })(),
      validate: function _isTruthy(value){
        var parsedValue;
        // Value is truthy
        if (value) {
          if (promptDef.expectType === 'json'){
            try {
              // TODO: use `rttc.parseHuman()` here
              parsedValue = JSON.parse(value);
              // Don't allow null
              if (_.isNull(parsedValue)) {
                return '`null` is not allowed, sorry';
              }
              // Allow booleans, strings, numbers, objects, arrays
              return true;
            }
            catch (e){}
            return 'enter valid JSON (don\'t forget double quotes!)';
          }
          return true;
        }

        // Value is falsy
        else {
          if (promptDef.example) {
            return 'e.g. '+promptDef.example;
          }
          return false;
        }
      }
    };
    // if (promptDef.example){
    //   inquirerPromptDef.default = promptDef.example;
    // }
    memo.push(inquirerPromptDef);
    return memo;
  }, []);
}
catch (e) {
  return exits.error(e);
}


inquirer.prompt(promptArray, function (answers) {
  var resultArray = [];
  try {
    _.each(answers, function (answer, key){
      resultArray.push({
        name: key,
        value: answer
      });
    });
  }
  catch (e) {
    return exits.error(e);
  }
  return exits.success(resultArray);
});