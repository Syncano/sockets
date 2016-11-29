var util = require('util');
var _ = require('lodash');

// Build template function outside of our loop below.
var templateFn = _.template(inputs.templateStr, {
  imports: {
    util: util,
    _: _
  }
});

// Now attempt to render the Lodash template.
// Templates are provided access to the Node.js `util` library,
// as well as `_` (Lodash itself).
// If the rendering fails because of a missing variable, try again
// with a fake variable inserted until the errors go away, or until
// we reach MAX_NUM_ITERATIONS.
var result;
var missingVars = [];
var morePotentiallyActionableErrorsExist = true;
var mostRecentTemplateErr;
var numIterations = 0;
var MAX_NUM_ITERATIONS = 10;
var dataWithFakeValues = _.cloneDeep(inputs.data||{});
while (numIterations < MAX_NUM_ITERATIONS && morePotentiallyActionableErrorsExist) {

  // Track iterations to prevent this loop from spinning out of control.
  numIterations++;

  try {
    // Attempt to render template and data into a single string using Lodash
    result = templateFn(dataWithFakeValues);

    // If we made it here, there were no errors rendering the template.
    morePotentiallyActionableErrorsExist = false;

  }
  catch (e) {
    // Recognize lodash template error (scope variable not defined)
    var isTplError = _.isObject(e) && (e.name === 'ReferenceError' || e.type === 'not_defined');
    // In Node v0.10.x, the error will have a handy arguments array.  In Node v0.12.0, we'll have to
    // pull the missing var from the error message, where it'll be the first word
    var missingVar = (_.isArray(e.arguments) && e.arguments[0]) || (e.message.split(' ')[0]);

    // If this is not a recognizable missing variable error, or if
    // the name of the scope variable cannot be determined, then
    // we need to stop.
    if (!isTplError || !missingVar) {
      mostRecentTemplateErr = e;
      morePotentiallyActionableErrorsExist = false;
    }
    // Otherwise we can put a fake value in for the variable in
    // order to deduce other missing variables for more complete
    // error feedback.
    else {
      missingVars.push(missingVar);
      dataWithFakeValues[missingVar] = {};
    }
  }
}


// If at least one missing variable was found, show it and use the
// `missingData` exit.
if (missingVars.length > 0) {

  // There should never be duplicates, but just in case:
  missingVars = _.uniq(missingVars);

  return exits.missingData({
    message: util.format('%s were used in template "%s", but not provided in the template data dictionary.', (missingVars.length>1?'Some variables':'A variable') + ' (' + _.map(missingVars, function (varName){return '`'+varName+'`';}).join(',')+')', inputs.source),
    missingVariables: missingVars
  });
}
// Otherwise if the only template error was some other unrecognized thing,
// exit out of the `couldNotRender` exit.
else if (mostRecentTemplateErr) {
  return exits.couldNotRender(mostRecentTemplateErr);
}

// If we made it here, everything w/ the _.template() call worked.
// Return the rendered result string.
return exits.success(result);