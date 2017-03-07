# URLs Syncano Socket

It is URLs integration with Syncano. It allows you to machines for working with url strings.

## Endpoints

### parse

#### Parameters:

      url: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'


### format

#### Parameters:

      urlTemplate: '/api/v1/user/:id/friends/:friendId',
      data: [object Object]


### resolve

#### Parameters:

      url: 'www.example.com/search',
      baseUrl: 'api.example.com/pets'


### is-url

#### Parameters:

      string: 'http://www.example.com'

