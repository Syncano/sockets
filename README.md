# Node Machines to Syncano Sockets Installation & Testing Script
## Go to:  `./sockets/CreateSocketsScript`
## Install dependencies

```sh
$ npm install
```

## To Run Everything at once
```sh
$ npm start
```

## To Run Tests
```sh
$ npm run tests
```

1. Create a temporary testing account on Syncano.
`npm run account`
2. Convert node machines into Syncano sockets by creating *.js and *.yml files.
`npm run sockets`
3. Test if sockets have been installed correctly, then remove them afterwards.
`npm run e2e`
4. Run unit tests
`npm test`