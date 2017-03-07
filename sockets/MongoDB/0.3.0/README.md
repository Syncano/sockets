# MongoDB Syncano Socket

It is MongoDB integration with Syncano. It allows you to structured node.js bindings for mongodb.

## Endpoints

### update-documents

#### Parameters:
```

  connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
  collection: 'direwolves',
  query: <dictionary>,
  update: <dictionary>,
  upsert: true,
  multi: true,
  writeConcern: <dictionary>
```


### list-collections

#### Parameters:
```

  connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default'
```


### count-documents

#### Parameters:
```

  connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
  collection: 'direwolves',
  query: <dictionary>
```


### describe-collection

#### Parameters:
```

  connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
  collection: 'direwolves'
```


### list-documents

#### Parameters:
```

  connectionUrl: 'mongodb://localhost:27017/machinepack-mongodb-default',
  collection: 'direwolves',
  query: <dictionary>,
  limit: 30,
  skip: 30,
  sort: <dictionary>,
  schema: <dictionary>
```

