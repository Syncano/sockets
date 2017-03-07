# KlarnaCheckOut Syncano Socket

It is KlarnaCheckOut integration with Syncano. It allows you to klarna check out

## Endpoints

### place-order

#### Parameters:
```

  eid: '123a',
  secret: 'ART238ureXkz561',
  live: true,
  cart: [object Object],
  country: 'NO',
  currency: 'NOK',
  locale: 'nb-no',
  confirmationURL: 'http://localhost:1337/confirmation?klarna_order_id={checkout.order.id}'
```


### fetchorder

#### Parameters:
```

  eid: '12345c',
  secret: 'somesecret',
  live: <boolean>,
  country: 'NO',
  currency: 'NOK',
  locale: 'nb-no',
  id: 'somerorderid23'
```


### confirm-order

#### Parameters:
```

  eid: 1234,
  secret: 'dsfsdgfdnghgesr435t5',
  live: <boolean>,
  country: 'SE',
  currency: 'NOK',
  locale: 'nb-no',
  id: 'sjdasd76a8d68asiu',
  order_ref: 'order2016-45'
```


### update-order

#### Parameters:
```
No parameters
```

