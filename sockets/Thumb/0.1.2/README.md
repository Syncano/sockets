# Thumb Syncano Socket

It is Thumb integration with Syncano. It allows you to easy generate thumb file with imagemagick native

## Endpoints

### read

#### Parameters:
```

  source: 'samples/test.png'
```


### write

#### Parameters:
```

  destination: 'samples/test-blur.png',
  done: <*>
```


### to

#### Parameters:
```

  blur: 2,
  width: 120,
  height: 120,
  size: '120x250',
  source: 'samples/test.png',
  destination: 'samples/test-blur.png',
  done: <*>,
  quality: 2
```


### multiple

#### Parameters:
```

  source: 'samples/test.png',
  schema: <array>,
  done: <*>,
  quality: 2
```

