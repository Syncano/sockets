# Postgresql Syncano Socket

It is Postgresql integration with Syncano. It allows you to structured node.js bindings for postgresql.

## Endpoints

### list-tables

#### Parameters:

      connectionUrl: 'postgres://foo:bar@localhost:5432/machinepack_postgresql'


### describe-table

#### Parameters:

      connectionUrl: 'postgres://foo:bar@localhost:5432/machinepack_postgresql',
      table: 'direwolves'


### list-records

#### Parameters:

      connectionUrl: 'postgres://foo:bar@localhost:5432/machinepack_postgresql',
      table: 'direwolves',
      query: undefined,
      limit: 30,
      skip: 30,
      sort: undefined,
      schema: undefined


### count-records

#### Parameters:

      connectionUrl: 'postgres://foo:bar@localhost:5432/machinepack_postgresql',
      table: 'direwolves',
      query: undefined

