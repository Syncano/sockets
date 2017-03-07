# Deis Syncano Socket

It is Deis integration with Syncano. It allows you to sdk for working with a deis install

## Endpoints

### list-apps

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com'
```


### login

#### Parameters:
```

  controller: 'http://deis.mydeisapp.com',
  username: 'foobar',
  password: 'deisrocks',
  sslVerify: true
```


### create-app

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  id: 'myawesomeapp'
```


### destroy-app

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp'
```


### set-config

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  values: [object Object]
```


### unset-config

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  key: 'DATABASE_URL'
```


### create-build

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  image: 'deis/example-go'
```


### list-processes

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp'
```


### scale-process

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  process: 'web',
  number: 1
```


### set-limit

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  limit: 'memory',
  value: '512M'
```


### unset-limit

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp',
  limit: 'memory'
```


### list-limits

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp'
```


### list-config

#### Parameters:
```

  token: '',
  controller: 'http://deis.mydeisapp.com',
  app: 'myawesomeapp'
```

