# PaidUpProductConnect Syncano Socket

It is PaidUpProductConnect integration with Syncano. It allows you to connector for paidup microservice product

## Endpoints

### category-retrieve

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word'

,
### product-retrieve

#### Parameters:

      baseUrl: 'http://localhost:9002',
      token: 'secret-word',
      productId: '12'

,
### organization-request

#### Parameters:

      baseUrl: 'http://localhost:9007',
      token: 'secret-word',
      organizationInfo: [object Object],
      userId: 'userId'

,
### organization-response

#### Parameters:

      baseUrl: 'http://localhost:9007',
      token: 'secret-word',
      organizationId: 'xxxyyyxxxx'

,
### organization-response-update

#### Parameters:

      baseUrl: 'http://localhost:9007',
      token: 'secret-word',
      organizationId: 'xxxyyyxxxx',
      paymentId: 'xxxyyyxxxx'

,
### organization-get

#### Parameters:

      baseUrl: 'http://localhost:9007',
      token: 'secret-word',
      organizationId: 'xxxyyyxxxx'

