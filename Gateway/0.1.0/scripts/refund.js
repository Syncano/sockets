function (inputs,exits
/**/) {
  console.log('inputs')
  console.log(inputs)
  var credentials,
      transaction
  try {
    credentials = JSON.parse(inputs.credential)
  }
  catch (e){
    return exits.couldNotParse(e)
  }
  try {
    transaction = JSON.parse(inputs.transaction)
  }
  catch (e){
    return exits.couldNotParse(e)
  }
  var options = {
        creditCardNumber : transaction.cardNumber,
        expirationMonth : (transaction.expDate).slice(0, 2),
        expirationYear : (transaction.expDate).slice(2, 4),
        amount : transaction.amount
      }
  credentials.testMode = inputs.testMode
  console.log(inputs.gateway);
  console.log(credentials);

  var Gateways = require('42-cent'),
      client = Gateways.use(inputs.gateway, credentials)
  client.refundTransaction(transaction.transactionId, options)
  .then(
    function(result){
      // console.log('result');  console.log(result);
      return exits.success(result)
    },
    function(err){
      // console.log('err');  console.log(err);
      return exits.error(err)
    }
  )

}