# Prompts Syncano Socket

It is Prompts integration with Syncano. It allows you to produce interactive prompts in the console and consume the answers.

## Endpoints

### select

#### Parameters:
```

  choices: [object Object],
  message: 'Please choose one of the following.',
  paginated: <boolean>
```


### confirm

#### Parameters:
```

  message: 'Are you sure?'
```


### text

#### Parameters:
```

  message: 'Please enter a value.',
  protect: true,
  expectJson: true,
  exampleValue: 'why doesn't my moose lay as well as thy goose?'
```


### multiselect

#### Parameters:
```

  choices: [object Object],
  message: 'Please choose one of the following.',
  paginated: <boolean>
```

