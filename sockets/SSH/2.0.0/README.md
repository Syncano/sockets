# SSH Syncano Socket

It is SSH integration with Syncano. It allows you to use ssh to send any command to a remote server with or without private keys.

## Endpoints

### run-ssh-command

#### Parameters:
```

  hostName: '127.0.0.1',
  port: '22',
  userName: 'user1',
  password: '',
  command: 'mkdir testfolder'
```


### run-ssh-command-keys

#### Parameters:
```

  hostName: '127.0.0.1',
  port: '22',
  userName: 'user1',
  privatekey: '',
  command: 'mkdir testfolder'
```

