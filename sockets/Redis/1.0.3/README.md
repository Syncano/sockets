# Redis Syncano Socket

It is Redis integration with Syncano. It allows you to structured node.js bindings for redis.

## Endpoints

### get-connection

#### Parameters:

      manager: '===',
      meta: '==='

,
### release-connection

#### Parameters:

      connection: '===',
      meta: '==='

,
### create-manager

#### Parameters:

      connectionString: 'redis://127.0.0.1:6379',
      onUnexpectedFailure: '->',
      meta: '==='

,
### destroy-manager

#### Parameters:

      manager: '===',
      meta: '==='

