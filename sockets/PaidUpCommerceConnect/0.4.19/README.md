# PaidUpCommerceConnect Syncano Socket

It is PaidUpCommerceConnect integration with Syncano. It allows you to connector for tdcommerce

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
      paymentsPlan: [object Object]

,
### order-add-payments

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      orderId: 'orderId',
      paymentsPlan: [object Object]

,
### order-update-payments

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      orderId: 'orderId',
      paymentPlanId: 'paymentPlanId',
      paymentPlan: [object Object]

,
### order-get

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      filter: '*'

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

