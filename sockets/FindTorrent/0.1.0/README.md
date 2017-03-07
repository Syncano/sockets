# FindTorrent Syncano Socket

It is FindTorrent integration with Syncano. It allows you to find torrents from kickass, eztv, and more

## Endpoints

### query-kickass

#### Parameters:
```

  apiUrl: 'https://kickass.to',
  sortByKey: 'seeders',
  sortOrder: 'desc',
  query: '<string>',
  page: 1,
  category: 'all'
```


### query-eztv

#### Parameters:
```

  baseUrl: 'https://eztv.ag',
  query: '<string>',
  category: 'all'
```


### find-movie

#### Parameters:
```

  query: '<string>'
```


### find-episode

#### Parameters:
```

  query: '<string>'
```


### query-all

#### Parameters:
```

  query: '<string>'
```


### get-eztv-showlist

#### Parameters:
```

  baseUrl: 'https://eztv.ag'
```


### get-eztv-show-episodes

#### Parameters:
```

  baseUrl: 'https://eztv.ag',
  showId: 1
```


### query-yts

#### Parameters:
```

  apiUrl: 'https://yts.ag',
  sortByKey: 'seeds',
  sortOrder: 'desc',
  query: '<string>',
  page: 1
```

