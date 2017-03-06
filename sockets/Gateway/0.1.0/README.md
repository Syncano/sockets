# Gateway Syncano Socket

It is Gateway integration with Syncano. It allows you to credit card processing gateway wrapper

## Endpoints

### charge

#### Parameters:

      credential: '...{"apiLogin": "this info"}...',
      transaction: '...{"firstname": "John"}...',
      gateway: 'Authorize.Net',
      testMode: 'false'

,
### refund

#### Parameters:

      credential: '...{"apiLogin": "this info"}...',
      transaction: '...{"firstname": "John"}...',
      gateway: 'Authorize.Net',
      testMode: 'false'

,
### authorize

#### Parameters:

      credential: '...{"apiLogin": "this info"}...',
      transaction: '...{"firstname": "John"}...',
      gateway: 'Authorize.Net',
      testMode: 'false'

,
### capture

#### Parameters:


,
### void-transaction

#### Parameters:

      credential: '...{"apiLogin": "this info"}...',
      transaction: '...{"firstname": "John"}...',
      gateway: 'Authorize.Net',
      testMode: 'false'

,
### get-settled-batch-list

#### Parameters:


,
### get-unsettled-transaction-list

#### Parameters:


