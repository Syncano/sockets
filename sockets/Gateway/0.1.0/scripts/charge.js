function (inputs,exits
/**/) {
  console.log('inputs')
  console.log(inputs)
  function time() {
    
    return Math.floor(new Date()
      .getTime() / 1000);
  }

  var md5 = require('md5'),
      orderId = time(),
      credentials,
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

  if(credentials.provider.name === 'OmniPay PSP'){
    var order = {
      amount : parseInt((String(transaction.amount)).replace('.',''))
    }
  } else {
    var order = {
      amount : transaction.amount
    }
  }
  console.log('transaction.expDate');
  console.log(transaction);
  var creditCard = {
    creditCardNumber : transaction.cardNumber,
    expirationMonth : (transaction.expDate).slice(0, 2),
    expirationYear : (transaction.expDate).slice(2, 4),
    cvv : transaction.cvv
  };

  if(transaction.billing_same_as_shipping && transaction.billing_same_as_shipping == 1){
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
  } else {
    prospect = {
      customerFirstName : transaction.billingFirstName,
      customerLastName : transaction.billingLastName,
      customerEmail : transaction.email,
      billingAddress : transaction.billingAddress,
      billingCity : transaction.billingCity,
      billingState : transaction.billingState,
      billingZip : transaction.billingZip,
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
  }
   
  var other = {
    phone: transaction.phone,
    currency: credentials.currency,
    IP: transaction.ipAddress,
    orderID: orderId,
    Operation: 'SAL'
  },
  sigParam = other.orderID+transaction.amount+other.currency+credentials.NumSite+other.Operation+transaction.cardNumber+credentials.KeySentence,
  sign = md5(sigParam);

  other.Signature = sign;

  // credentials.testMode = inputs.testMode;
  if(transaction.cardNumber == '4111111111111111'){
    credentials.testMode = true;
  }
  
  if(transaction.type == 'crm'){
    other.type = transaction.type;
  }
  if(credentials.testMode){
    credentials.API_LOGIN_ID = credentials.provider.demoUser,
    credentials.TRANSACTION_KEY = credentials.provider.demoPassword
  }
  // console.log('order.amount');
  // console.log(order.amount);
  var Gateways = require('42-cent'),
      client = Gateways.use(inputs.gateway, credentials)
  
  client.submitTransaction(order, creditCard, prospect, other)
  .then(
    function(result){
      console.log('chargeresult');  console.log(result);
      return exits.success(result)
    },
    function(err){
      console.log('chargeerr');  console.log(err);
      return exits.error(err)
    }
  )

}