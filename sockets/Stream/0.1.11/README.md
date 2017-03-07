# Stream Syncano Socket

It is Stream integration with Syncano. It allows you to work with stream readable, writable

## Endpoints

### create-read

#### Parameters:
```

  path: 'tmp.log',
  text: 'lorem ipsum'
```


### create-write

#### Parameters:
```

  stream: <*>,
  path: 'tmp.log'
```


### zip

#### Parameters:
```

  stream: <*>
```


### unzip

#### Parameters:
```

  stream: <*>
```


### md

#### Parameters:
```

  stream: <*>
```


### minify

#### Parameters:
```

  stream: <*>
```


### stringify

#### Parameters:
```

  stream: <*>,
  write: '.tmp/test.log'
```


### replace

#### Parameters:
```

  stream: <*>,
  search: <*>,
  replace: 'abc'
```


### insert

#### Parameters:
```

  stream: <*>,
  text: 'a string to insert',
  after: <*>,
  before: <*>
```

