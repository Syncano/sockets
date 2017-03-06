# MongoDB Syncano Socket

It is MongoDB integration with Syncano. It allows you to structured node.js bindings for mongodb.

## Endpoints

### update-documents

#### Parameters:

      connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
      collection: 'direwolves',
      query: undefined,
      update: undefined,
      upsert: true,
      multi: true,
      writeConcern: undefined

,
### list-collections

#### Parameters:

      connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default'

,
### count-documents

#### Parameters:

      connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
      collection: 'direwolves',
      query: undefined

,
### describe-collection

#### Parameters:

      connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
      collection: 'direwolves'

,
### list-documents

#### Parameters:

      connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
      collection: 'direwolves',
      query: undefined,
      limit: 30,
      skip: 30,
      sort: undefined,
      schema: undefined

