# LocalMachinepacks Syncano Socket

It is LocalMachinepacks integration with Syncano. It allows you to work with local machinepacks.

## Endpoints

### prompt-about-new-machinepack

#### Parameters:
```
No parameters
```


### prompt-about-new-machine

#### Parameters:
```

  identity: 'do-something'
```


### get-machines-dir

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foobar'
```


### remove-machine

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/',
  identity: 'some-machine'
```


### rename-machine

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/',
  originalIdentity: 'do-stuff',
  newIdentity: 'do-stuff-with-a-better-name'
```


### copy-machine

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/',
  originalIdentity: 'do-stuff',
  newIdentity: 'copy-of-do-stuff'
```


### list-machines

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/'
```


### run-machine

#### Parameters:
```

  machinepackPath: '/Users/mikermcneil/machinepack-foo/',
  identity: 'foo-bar',
  inputValues: [object Object]
```


### read-machine-file

#### Parameters:
```

  source: '/Users/mikermcneil/machinepack-foo/machines/bar.js'
```


### write-machine-file

#### Parameters:
```

  destination: '/Users/mikermcneil/machinepack-foobar/machines/some-machine.js',
  friendlyName: 'Do something',
  description: 'Do something useful given stuff; maybe return something else.',
  moreInfoUrl: 'http://api.stuff.org/foo/bar?v=3.1',
  extendedDescription: '...lots of words...',
  sync: true,
  cacheable: true,
  idempotent: true,
  inputs: [object Object],
  exits: [object Object]
```


### build-machine-code

#### Parameters:
```

  friendlyName: 'Do something',
  description: 'Do something useful given stuff; maybe return something else.',
  extendedDescription: '...lots of words...',
  moreInfoUrl: 'http://www.cis.upenn.edu/~treebank/tokenization.html',
  fn: '  return exits.success();',
  cacheable: <boolean>,
  sync: <boolean>,
  idempotent: <boolean>,
  environment: req,
  inputs: [object Object],
  exits: [object Object]
```


### prompt-for-input-vals

#### Parameters:
```

  prompts: [object Object]
```


### add-machine

#### Parameters:
```

  machinepackRootPath: '/Users/mikermcneil/machinepack-foobar',
  identity: 'do-something',
  friendlyName: 'Do something',
  description: 'Do something useful given stuff; maybe return something else.',
  extendedDescription: '...lots of words...',
  moreInfoUrl: 'http://api.stuff.org/foo/bar?v=3.1',
  cacheable: true,
  sync: true,
  idempotent: true,
  inputs: [object Object],
  exits: [object Object]
```


### run-machine-interactive

#### Parameters:
```

  machinepackPath: '/Users/mikermcneil/machinepack-foo/machines/bar.js',
  identity: 'foo-bar',
  inputValues: [object Object]
```


### parse-machinepack-metadata

#### Parameters:
```

  json: '{...package.json string...}'
```


### initialize-machinepack

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/'
```


### read-package-json

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/'
```


### interpret-machine-module

#### Parameters:
```

  module: 'module.exports = {inputs: {atest: {example: "whatever"    }  },  exits: {    error: {}, success: {example: {stuff: [{andMore: "stuff"        }]      }    }  },  fn: function(inputs, exits) {    return exits.success();  }};'
```


### scaffold-tests

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/'
```


### add-test

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/',
  identity: 'do-stuff-and-things',
  using: [object Object],
  outcome: 'foobar',
  returns: '*',
  before: 'function before (done) {
 done(); 
}',
  after: 'function after (done) {
 done(); 
}'
```


### browse-to-pack-url

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/',
  toWhat: 'npm'
```


### get-signature

#### Parameters:
```

  dir: '/Users/mikermcneil/machinepack-foo/'
```


### write-pack

#### Parameters:
```

  destination: '/Users/mikermcneil/machinepack-foo/',
  packData: [object Object],
  force: true,
  ensureMachineDep: true,
  mergeDependencies: true
```

