# Process Syncano Socket

It is Process integration with Syncano. It allows you to work with child procs and the running process.

## Endpoints

### escape-cli-opt

#### Parameters:
```

  value: '*'
```


### kill-child-process

#### Parameters:
```

  childProcess: '===',
  forceIfNecessary: false,
  maxMsToWait: 500
```


### spawn-child-process

#### Parameters:
```

  command: 'ls',
  cliArgs: -la,
  dir: '/Users/mikermcneil/foo',
  environmentVars: [object Object]
```


### execute-command

#### Parameters:
```

  command: 'ls -la',
  dir: '/Users/mikermcneil/foo',
  environmentVars: [object Object],
  timeout: 60000
```

