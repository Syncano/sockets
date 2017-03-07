# Elastic Syncano Socket

It is Elastic integration with Syncano. It allows you to use elastic api

## Endpoints

### search

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  query: 'cute dogs'
```


### bulk

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'myindex',
  actions: undefined
```


### searchCustom

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'mytype',
  query: 'cute dogs'
```


### getAlias

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  name: 'alias'
```


### deleteByQuery

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'mytype',
  query: '{ query: { "match_all" : {} } }'
```


### updateAliases

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  actions: '{actions: [{ remove: { index: "response_1", alias: "response" } }, { add:    { index: "response_2", alias: "response" } }] }'
```

