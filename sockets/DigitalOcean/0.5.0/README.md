# DigitalOcean Syncano Socket

It is DigitalOcean integration with Syncano. It allows you to communicate with the digitalocean api to create, destroy, list and work with droplets.

## Endpoints

### droplet-create

#### Parameters:
```

  token: 'FFDFdf8f8d',
  name: 'My-New-Droplet',
  region: 'NYC2',
  size: '512mb',
  image: 434348,
  sshkeys: '10, 11, 12',
  backups: false,
  ipv6: 'false',
  private_networking: 'false',
  user_data: 'MetadataInfoHere'
```


### droplet-list

#### Parameters:
```

  token: 'FFDFdf8f8d'
```


### droplet-get-backups

#### Parameters:
```

  token: 'FFDFdf8f8d',
  dropletID: '7564837494'
```


### droplet-delete

#### Parameters:
```

  token: 'FFDFdf8f8d',
  dropletID: '7564837494'
```


### droplet-get-snapshots

#### Parameters:
```

  token: 'FFDFdf8f8d',
  dropletID: '7564837494'
```


### droplet-get

#### Parameters:
```

  token: 'FFDFdf8f8d',
  dropletID: '7564837494'
```


### droplet-action

#### Parameters:
```

  token: 'FFDFdf8f8d',
  dropletID: 7564837494,
  action: 'reboot'
```

