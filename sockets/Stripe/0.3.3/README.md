# Stripe Syncano Socket

It is Stripe integration with Syncano. It allows you to communicate with the stripe api to start and stop stripe subscriptions.

## Endpoints

### capture-charge

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  charge: 'ch_14ziQH2eZvKYlo2Ci0BoqQvT'
```


### create-card

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  token: 'tok_someCardIdjsd2isnsd',
  customer: 'cus_4kmLwU2PvQBeqq'
```


### create-charge

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  amount: 500,
  currency: 'usd',
  card: 'tok_someCardIdjsd2isnsd',
  capture: true,
  description: 'This notable charge was for several gallons of mayonnaise!',
  customer: 'cus_4kmLwU2PvQBeqq'
```


### create-customer

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  description: 'sdjasnd928u8duasd'
```


### delete-card

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  card: 'card_14t5VD2eZvKYlo2CbhcljD3Y'
```


### list-cards

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  customer: 'cus_4kmLwU2PvQBeqq'
```


### subscribe-customer

#### Parameters:
```

  apiKey: 'somestring837483749blah',
  plan: 'premium',
  quantity: 20,
  card: 'tok_someCardIdjsd2isnsd',
  customer: 'cus_4kmLwU2PvQBeqq'
```

