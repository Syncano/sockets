var _ = require('lodash');
var inquirer = require('inquirer');

var spinlock;

// Since inquirer doesn't allow us to tap into this,
// we'll handle it here with the help of a spin-lock to ensure
// that no issues arise.
//
// ...but.... this doesn't work yet.
//////////////////////////////////////////////////////////////////////////////
// process.on( 'SIGINT', function (){
//   if (spinlock) return;
//   spinlock = true;
//   return exits.sigint();
// });

inquirer.prompt([{
  type: inputs.protect ? 'password' : 'input',
  name: 'value',
  validate: function _isTruthy(value){
    var parsedValue;
    // Value is truthy
    if (value) {
      if (inputs.expectJson){
        try {
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
      if (inputs.exampleValue) {
        return 'e.g. '+inputs.exampleValue;
      }
      return false;
    }
  },
  message: inputs.message || 'Please enter a value.'
}], function(answers) {
  if (spinlock) return;
  spinlock = true;
  return exits.success(answers.value);
});