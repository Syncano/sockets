# LocalTreelineProjects Syncano Socket

It is LocalTreelineProjects integration with Syncano. It allows you to work with local treeline projects.

## Endpoints

### read-keychain

#### Parameters:
```

  keychainPath: '/Users/mikermcneil/Desktop/foo'
```


### write-keychain

#### Parameters:
```

  username: 'mikermcneil',
  secret: '29f559ae-3bec-4d0a-8458-1f4e32a72407',
  keychainPath: '/Users/mikermcneil/Desktop/foo'
```


### read-linkfile

#### Parameters:
```

  dir: '/Users/mikermcneil/Desktop/foo'
```


### write-linkfile

#### Parameters:
```

  dir: '/Users/mikermcneil/Desktop/foo',
  id: '432',
  identity: 'my-cool-app',
  displayName: 'My Cool App',
  type: 'app',
  owner: 'mikermcneil',
  hashes: [object Object]
```


### install-treeline-deps

#### Parameters:
```

  dir: '/Users/mikermcneil/Desktop/foo',
  keychainPath: '/Users/mikermcneil/Desktop/foo',
  treelineApiUrl: 'http://api.treeline.io',
  useCachedHashes: <boolean>
```


### normalize-type

#### Parameters:
```

  type: 'machinepack',
  dir: '/Users/mikermcneil/Desktop/foo'
```


### sync-remote-changes

#### Parameters:
```

  type: 'machinepack',
  changelog: [object Object],
  smash: true,
  onSyncSuccess: '->',
  onNpmInstall: '->',
  onNpmInstallError: '->',
  onNpmInstallSuccess: '->',
  localPort: 1337,
  dir: '/Users/mikermcneil/Desktop/foo',
  treelineApiUrl: 'http://api.treeline.io',
  npmInstall: true,
  previewServerLifted: true
```


### apply-pack-changelog

#### Parameters:
```

  changelog: [object Object],
  onNpmInstall: '->',
  onNpmInstallError: '->',
  onNpmInstallSuccess: '->',
  dir: '/Users/mikermcneil/Desktop/foo',
  treelineApiUrl: 'http://api.treeline.io',
  isDependency: true
```

