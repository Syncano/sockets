var anet = require('authorize-net');
var service = new anet({
  API_LOGIN_ID: inputs.apiLoginId,
  TRANSACTION_KEY: inputs.transactionKey,
  testMode: inputs.testMode
});

  var order = {};
var creditCard = {};
var prospect = {};
var billTo = {};
var shipTo = {};
var other = '';
var order = {};


creditCard.creditCardNumber = inputs.cardnumber;
creditCard.expirationYear = inputs.cardexpyear;
creditCard.expirationMonth = inputs.cardexpmonth;
creditCard.cvv2 = inputs.cvv2;


prospect.billingFirstName= inputs.billingFirstName; //customerFirstName
prospect.billingLastName= inputs.billingLastName;//customerLastName
//prospect.customerEmail = inputs.billingEmail;
prospect.billingAddress = inputs.billingCity;
prospect.billingCity = inputs.billingState;
prospect.billingState = inputs.billingPostalCode;
prospect.billingPostalCode = inputs.billingPostalCode;
prospect.billingCountry = inputs.billingCountry;



prospect.shippingFirstName = inputs.billingFirstName;
prospect.shippingLastName = inputs.billingLastName;
prospect.shippingAddress = inputs.billingAddress1;
prospect.shippingCity = inputs.billingCity;
prospect.shippingState = inputs.billingState;
prospect.shippingPostalCode = inputs.billingPostalCode;
prospect.shippingCountry = inputs.billingCountry;


order.amount = inputs.amount;

service.authorizeTransaction(order, creditCard, prospect, other).then(function(transaction) {


  if (transaction._original.responseCode[0] === '1') {
         console.log('success');
    return exits.success(transaction) //.transactionResponse)
  } else {
       console.log('error');
    return exits.error('error');
  }
});