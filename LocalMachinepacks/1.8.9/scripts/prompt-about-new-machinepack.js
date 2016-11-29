/**
 * Module dependencies
 */

var inquirer = require('inquirer');
var chalk = require('chalk');
var _ = require('lodash');
var Path = require('path');

// `metadata` will hold the results.
var metadata = {};

var log = console.log;

inquirer.prompt([
  {
    name: 'friendlyName',
    type: 'input',
    message: ''+
    'What would you like to use as the "friendly name" for your machinepack?
'+
    chalk.gray('(e.g. "Passwords" or "Twitter")')+'
'+
    '',
    validate: function (friendlyName){
      if (!_.isString(friendlyName) || !friendlyName) return;
      return true;
    }
  }
], function (answers) {

  // Save answers
  _.extend(metadata, answers);

  // Build a version of the friendlyName in sentence case.
  var sentenceCaseFriendlyName = metadata.friendlyName.replace(/(^[A-Z]|\s[A-Z])/g, function (match){
    return match.toLowerCase();
  });

  // Build identity by ecmascript-izing the friendly name
  var ecmascriptizedFriendlyName = metadata.friendlyName.replace(/[^0-9a-zA-Z]*/g,'');
  metadata.identity = ecmascriptizedFriendlyName.toLowerCase();

  // Then build the moduleName based on that
  metadata.moduleName = metadata.moduleName || 'machinepack-'+metadata.identity;

  // Expose sentenceCaseFriendlyName in result for convenience
  metadata.sentenceCaseFriendlyName = sentenceCaseFriendlyName;

  log('');
  log('The module will be named `%s`.', metadata.moduleName);
  log('');

  // Build default description
  var defaultDesc = 'Work with '+sentenceCaseFriendlyName+'.';

  inquirer.prompt([{
    name: 'description',
    type: 'input',
    message: 'Describe this machinepack in 80 characters or less.
'+
    chalk.gray('(e.g. "Communicate with the Github API to get repos, commits, etc.")')+'
',
    default: defaultDesc,
    validate: function (description){
      return !!description;
    }
  }], function (answers) {

    // Save answers
    _.extend(metadata, answers);

    log('');

    return exits.success(metadata);
  });
});