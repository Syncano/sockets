# PaidUpCommerceConnect Syncano Socket

It is PaidUpCommerceConnect integration with Syncano. It allows you to connector for paidup microservice commerce

## Endpoints

### coupon-get

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'TDCommerceToken-CHANGE-ME!',
      filter: '*'

,
### coupon-create

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      code: 'NEWDISCOUNTCOUPON',
      startDate: '2016-05-05',
      endDate: '2016-06-06',
      percent: 10,
      quantity: 2,
      productsId: someProductId

,
### coupon-redeem

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      coupon: 'NEWDISCOUNTCOUPON',
      productId: 'Id1'

,
### coupon-update

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      filter: '*',
      data: '*'

,
### order-create

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userId: 'userId',
      description: 'this is a order description',
      paymentsPlan: [object Object]

,
### order-add-payments

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userSysId: 'userSysId',
      orderId: 'orderId',
      paymentsPlan: [object Object]

,
### order-update-payments

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userSysId: 'userSysId',
      orderId: 'orderId',
      paymentPlanId: 'paymentPlanId',
      paymentPlan: [object Object]

,
### order-get

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      orderId: 'orderId',
      userId: 'userId',
      limit: 5,
      sort: 1

,
### order-get-to-charge

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word'

,
### order-to-complete

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word'

,
### order-search

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      params: 'wome word'

,
### order-payment-recent

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userId: 'userId',
      limit: 5

,
### order-active

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userId: 'userId',
      limit: 1

,
### order-payment-next

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      userId: 'userId',
      limit: 1

,
### order-get-organization

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      organizationId: 'organizationId',
      limit: 5,
      sort: 1

,
### order-update-webhook

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      data: [object Object]

,
### order-history

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      orderId: 'orderId',
      limit: 5,
      sort: 1

,
### report-revenue-projection

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'TDCommerceToken-CHANGE-ME!',
      filter: '*'

,
### report-revenue

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'TDCommerceToken-CHANGE-ME!',
      filter: '*'

,
### order-transactions

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      organizationId: 'orderId',
      limit: 5,
      sort: 1

,
### order-transactions-organization

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      organizationId: 'orderId',
      limit: 5,
      sort: 1

