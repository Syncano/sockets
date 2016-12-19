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
  type: 'list',
  name: 'choice',
  message: inputs.message || 'Please choose one of the following.',
  paginated: inputs.paginated || false,
  choices: inputs.choices
}], function(answers) {
  if (spinlock) return;
  spinlock = true;
  return exits.success(answers.choice);
});