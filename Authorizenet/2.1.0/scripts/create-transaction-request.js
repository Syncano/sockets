var anet = require('authorize-net');
  var service = new anet({
    API_LOGIN_ID: inputs.apiLoginId,
    TRANSACTION_KEY: inputs.transactionKey,
    testMode: inputs.testMode
  });

//  console.log('ser ', service);

  //// var service=require('node-authorize-net')(inputs.apiLoginId,inputs.transactionKey);
  //// service.authCaptureTransaction(inputs.amount,inputs.cardnumber,inputs.cardexpyear,inputs.cardexpmonth,inputs.cardcode).then(function (transaction) {
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
  // prospect (object)
  //
  // 'customerFirstName' (string): First name of the customer (also used for the billing).
  // 'customerLastName' (string): Last name of the customer (also used for the billing).
  // 'customerEmail' (string): Email of the customer.



  order.amount = inputs.amount;

 // service.authorizeTransaction(order, creditCard, prospect, other).then(function(transaction) {
  // or    //
  service.submitTransaction(order, creditCard, prospect, other).then(function(transaction) {

    // console.log('1 transaction', transaction);
    //   console.log('2', transaction.authCode)
    // //console.log('3', transaction._orininal);//.transactionResponse);
    //  console.log('3', transaction._original);
    //  console.log('3', transaction._original.responseCode);
    // if (transaction.transactionResponse.responseCode[0] === 1) {

    if (transaction._original.responseCode[0] === '1') {
           console.log('success');
      return exits.success(transaction) //.transactionResponse)
    } else {
         console.log('error');
      return exits.error('error');
    }
  });