# PaidUpScheduleConnect Syncano Socket

It is PaidUpScheduleConnect integration with Syncano. It allows you to connector from tdschedule

## Endpoints

### calculate-price

#### Parameters:

      baseUrl: 'http://localhost:9006',
      token: 'secret-word',
      originalPrice: 200.23,
      stripePercent: 2.9,
      stripeFlat: 0.3,
      paidUpFee: 5,
      discount: 20,
      payProcessing: false,
      payCollecting: true


### calculate-prices

#### Parameters:

      baseUrl: 'http://localhost:9006',
      token: 'secret-word',
      prices: [object Object]

