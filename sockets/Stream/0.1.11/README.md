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

  stream: undefined,
  path: 'tmp.log'
```


### zip

#### Parameters:
```

  stream: undefined
```


### unzip

#### Parameters:
```

  stream: undefined
```


### md

#### Parameters:
```

  stream: undefined
```


### minify

#### Parameters:
```

  stream: undefined
```


### stringify

#### Parameters:
```

  stream: undefined,
  write: '.tmp/test.log'
```


### replace

#### Parameters:
```

  stream: undefined,
  search: undefined,
  replace: 'abc'
```


### insert

#### Parameters:
```

  stream: undefined,
  text: 'a string to insert',
  after: undefined,
  before: undefined
```

