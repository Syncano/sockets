# GoogleAPIsURLShortener Syncano Socket

It is GoogleAPIsURLShortener integration with Syncano. It allows you to api will have several methods to work with google url shortener

## Endpoints

### url-get

#### Parameters:
```

  shortUrl: 'http://goo.gl/xKbRu3',
  projection: 'ANALYTICS_TOP_STRINGS',
  fields: 'analytics,created,id,kind,longUrl,status',
  key: 'AIzaSyAYVDlaoVs_GZw9JNvSclRWH_PEMKII6tc'
```


### url-insert

#### Parameters:
```

  longUrl: 'https://www.google.com',
  analitics: undefined,
  id: 'someUniqId',
  kind: 'urlshortener#url',
  status: 'SomeStatus',
  created: '1605-11-05T00:00:00.000Z',
  fields: 'analytics,created,id,kind,longUrl,status',
  key: 'AIzaSyAYVDlaoVs_GZw9JNvSclRWH_PEMKII6tc'
```


### url-list

#### Parameters:
```

  key: 'AIzaSyAYVDlaoVs_GZw9JNvSclRWH_PEMKII6tc',
  projection: 'ANALYTICS_CLICKS',
  start-token: 'nextPageToken'
```

