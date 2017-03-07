# ElasticSearch Syncano Socket

It is ElasticSearch integration with Syncano. It allows you to access the elasticsearch api in node.js.

## Endpoints

### search

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  query: 'cute dogs'
```


### update

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'user',
  id: 'lzmkDgMjTbGoacxLMsB_zA',
  document: <dictionary>
```


### create

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'user',
  document: <dictionary>
```


### destroy

#### Parameters:
```

  hostname: 'localhost',
  port: 9200,
  index: 'myindex',
  type: 'user',
  id: 'lzmkDgMjTbGoacxLMsB_zA'
```

