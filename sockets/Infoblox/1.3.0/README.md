# Infoblox Syncano Socket

It is Infoblox integration with Syncano. It allows you to make rest calls for the infoblox wapi

## Endpoints

### get-host

#### Parameters:

      host: 'infoblox-host.customer.com',
      username: 'api-user',
      password: 'SomePassword',
      api: '1.6',
      call: 'foo',
      strictSearch: true

,
### get-subnet

#### Parameters:

      host: 'infoblox-host.customer.com',
      username: 'api-user',
      password: 'SomePassword',
      api: '1.6',
      exattr: 'Building',
      call: 'foo',
      strictSearch: true,
      optional: 'VLAN:=60'

,
### get-next-available-ip

#### Parameters:

      host: 'infoblox-host.customer.com',
      username: 'api-user',
      password: 'SomePassword',
      api: '1.6',
      ref: 'ZG5zLm5ldHdRcmskMTAuMjEwLjAuMC8yNC8w',
      num: 3

,
### get-network-ref

#### Parameters:

      host: 'infoblox-host.customer.com',
      username: 'api-user',
      password: 'SomePassword',
      api: '1.6',
      subnet: '10.10.10.0/24'

,
### get-record

#### Parameters:

      host: 'infoblox-host.customer.com',
      username: 'api-user',
      password: 'SomePassword',
      api: '1.6',
      call: 'foo',
      strictSearch: true

