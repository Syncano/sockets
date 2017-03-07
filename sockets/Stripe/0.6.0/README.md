# Stripe Syncano Socket

It is Stripe integration with Syncano. It allows you to communicate with the stripe api to charge credit cards, etc.

## Endpoints

### create-card

#### Parameters:

      apiKey: 'somestring837483749blah',
      token: 'tok_someCardIdjsd2isnsd',
      customer: 'cus_4kmLwU2PvQBeqq'


### capture-charge

#### Parameters:

      apiKey: 'somestring837483749blah',
      charge: 'ch_14ziQH2eZvKYlo2Ci0BoqQvT'


### create-customer

#### Parameters:

      apiKey: 'somestring837483749blah',
      description: 'sdjasnd928u8duasd'


### list-cards

#### Parameters:

      apiKey: 'somestring837483749blah',
      customer: 'cus_4kmLwU2PvQBeqq'


### delete-card

#### Parameters:

      apiKey: 'somestring837483749blah',
      card: 'card_14t5VD2eZvKYlo2CbhcljD3Y'


### create-charge

#### Parameters:

      apiKey: 'somestring837483749blah',
      amount: 500,
      currency: 'usd',
      card: 'tok_someCardIdjsd2isnsd',
      capture: true,
      description: 'This notable charge was for several gallons of mayonnaise!',
      customer: 'cus_4kmLwU2PvQBeqq'


### subscribe-customer

#### Parameters:

      apiKey: 'somestring837483749blah',
      plan: 'premium',
      quantity: 20,
      card: 'tok_someCardIdjsd2isnsd',
      customer: 'cus_4kmLwU2PvQBeqq'


### update-subscription

#### Parameters:

      apiKey: 'somestring837483749blah',
      plan: 'premium',
      quantity: 20,
      sub: 'sub_someSubIdjsd2isnsd',
      prorate: 'true',
      customer: 'cus_4kmLwU2PvQBeqq'


### cancel-subscription

#### Parameters:

      apiKey: 'somestring837483749blah',
      sub: 'sub_someSubIdjsd2isnsd',
      instant: 'true',
      customer: 'cus_4kmLwU2PvQBeqq'


### retrieve-subscription-details

#### Parameters:

      apiKey: 'somestring837483749blah',
      sub: 'sub_someSubIdjsd2isnsd',
      customer: 'cus_4kmLwU2PvQBeqq'


### one-off-charge

#### Parameters:

      apiKey: 'somestring837483749blah',
      amount: 500,
      currency: 'usd',
      cardnumber: '4242424242424242',
      cardexpmonth: 12,
      cardexpyear: 2016,
      cardcvc: '123',
      description: 'This notable charge was for several gallons of mayonnaise!'

