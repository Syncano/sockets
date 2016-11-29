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
  type: 'confirm',
  name: 'choice',
  message: inputs.message || 'Are you sure?'
}], function (answers){
  if (spinlock) return;
  spinlock = true;
  if (answers.choice){
    return exits.success();
  }
  return exits.no();
});


///////////////////////////////////////////////
// Lower-level strategy:
// (causes weird issues though)
///////////////////////////////////////////////
//
// var didUserConfirm;
//
// inquirer.prompt([{
//   type: 'confirm',
//   name: 'choice',
//   message: inputs.message || 'Are you sure?'
// }]).process.subscribe(
// function afterAnswer(result){
//   didUserConfirm = !!result.answer;
// },
// function onError(err){
//   return exits.error(err);
// },
// function onComplete () {
//   if (didUserConfirm === true) {
//     return exits.success();
//   }
//   else if (didUserConfirm === false) {
//     return exits.no();
//   }
//   return exits.error('Consistency violation- answer "'+result.answer+'" is not a valid boolean value.');
// });