# UTorrent Syncano Socket

It is UTorrent integration with Syncano. It allows you to communicate with utorrent client api to list and add torrents.

## Endpoints

### list-torrents

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345'
```


### get-torrent-details

#### Parameters:
```
No parameters
```


### create-client

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345'
```


### add-torrent-url

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345',
  torrentUrl: '',
  downloadDir: 0,
  path: '/dir/path/'
```


### add-torrent

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345',
  torrentContents: 'Torrent Contents',
  downloadDir: 0,
  path: '/dir/path/'
```


### start-torrent

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345',
  hash: ''
```


### stop-torrent

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345',
  hash: ''
```


### remove-torrent

#### Parameters:
```

  host: 'localhost',
  port: 26085,
  username: 'admin',
  password: '12345',
  hash: ''
```

