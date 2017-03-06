# WePay Syncano Socket

It is WePay integration with Syncano. It allows you to communicate with wepay api to register users, create accounts and accept payments.

## Endpoints

### app-details

#### Parameters:

      clientId: 123456,
      clientSecret: '6446c521bd',
      useProduction: false

,
### user-details

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      useProduction: false

,
### user-callback

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      callbackUri: 'https://www.wepay.com/ipn/12345',
      useProduction: false

,
### account-create

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      name: 'My Payment Account',
      description: 'My payment account is for money.',
      useProduction: false,
      referenceId: 'ABCD1234',
      type: 'business',
      imageUri: 'http://s3.amazonaws.com/myphoto.jpg',
      gaqDomains: mydomain.com,myotherdomain.com,
      themeObject: [object Object],
      mcc: 7392,
      callbackUri: 'https://www.baggins.com/callback',
      country: 'US',
      currencies: USD,
      countryOptions: [object Object],
      feeScheduleSlot: 9

,
### account-details

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 12345,
      useProduction: false

,
### account-find

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      name: 'My Payment Account',
      referenceId: '1234abcd',
      sortOrder: 'DESC',
      useProduction: false

,
### account-modify

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 12345,
      name: 'My new payment account name',
      description: 'My new payment account description',
      useProduction: false,
      referenceId: 'ABCD1234',
      imageUri: 'http://s3.amazonaws.com/myphoto.jpg',
      gaqDomains: mydomain.com,myotherdomain.com,
      themeObject: [object Object],
      callbackUri: 'https://www.baggins.com/callback',
      countryOptions: [object Object],
      feeScheduleSlot: 9

,
### account-delete

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 12345,
      reason: 'No longer being used.',
      useProduction: false

,
### account-get-uri

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 12345,
      mode: 'regular',
      redirectUri: 'https://www.baggins.com/updated'

,
### checkout-create

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 1548718026,
      shortDescription: '2 dozen bisquits',
      type: 'goods',
      amount: 9.99,
      currency: 'USD',
      longDescription: 'This recipe will produce the biggest biscuits in the history of the world! Serve these gems with butter, preserves, gravy or they can also be used as dinner rolls...you get the picture.',
      emailMessage: [object Object],
      fee: [object Object],
      callbackUri: 'https://www.baggins.com/callback',
      autoCapture: false,
      referenceId: '1234abcd',
      uniqueId: 'abcdef123456',
      hostedCheckout: [object Object],
      paymentMethod: [object Object],
      deliveryType: 'none',
      useProduction: false

,
### checkout-capture

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      checkoutId: 12345,
      useProduction: false

,
### user-register

#### Parameters:

      clientId: 123456,
      clientSecret: '6446c521bd',
      email: 'bilbo@baggins.com',
      scope: 'manage_accounts,collect_payments,view_user,send_money,preapprove_payments',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      originalIp: '74.125.224.84',
      originalDevice: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.102 Safari/534.13',
      tosAcceptanceTime: 1209600,
      useProduction: false,
      redirectUri: 'https://www.baggins.com/thanks',
      callbackUri: 'https://www.baggins.com/callback'

,
### user-confirm

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      emailMessage: 'Welcome to my <strong>application</strong>',
      useProduction: false

,
### checkout-find

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      accountId: 1548718026,
      start: 10,
      limit: 25,
      referenceId: '123abc',
      state: 'active',
      preapprovalId: 123,
      startTime: 1209600,
      endTime: 1209600,
      sortOrder: 'DESC',
      shippingFee: 2.99

,
### checkout-refund

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      checkoutId: 1548718026,
      refundReason: 'Accidental payment',
      amount: 4.99,
      appFee: 1.99,
      payerEmailMessage: 'Here is your refund.',
      payeeEmailMessage: 'A refund was issued.'

,
### checkout-details

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      checkoutId: 12345,
      useProduction: false

,
### checkout-cancel

#### Parameters:

      accessToken: '604f39f41e364951ced74070c6e8bfa49d346cdfee6191b03c2c2d9c9cda9184',
      checkoutId: 12345,
      cancelReason: 'Product was defective. Do not want.',
      useProduction: false

