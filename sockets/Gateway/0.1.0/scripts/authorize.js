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
  var order = {
    amount : transaction.amount
  },
  creditCard = {
    creditCardNumber : transaction.cardNumber,
    expirationMonth : (transaction.expDate).slice(0, 2),
    expirationYear : (transaction.expDate).slice(2, 4),
    cvv : transaction.cvv
  },
  prospect = {
    customerFirstName : transaction.firstName,
    customerLastName : transaction.lastName,
    customerEmail : transaction.email,
    billingAddress : transaction.address,
    billingCity : transaction.city,
    billingState : transaction.state,
    billingZip : transaction.zip,
    billingCountry : transaction.country,
    shippingFirstName : transaction.firstName,
    shippingLastName : transaction.lastName,
    shippingEmail : transaction.email,
    shippingAddress : transaction.address,
    shippingCity : transaction.city,
    shippingState : transaction.state,
    shippingZip : transaction.zip,
    shippingCountry : transaction.country
  }
  credentials.testMode = inputs.testMode
  console.log(inputs.gateway);
  console.log(credentials);

  var Gateways = require('42-cent'),
      client = Gateways.use(inputs.gateway, credentials)
  client.authorizeTransaction(order, creditCard, prospect)
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