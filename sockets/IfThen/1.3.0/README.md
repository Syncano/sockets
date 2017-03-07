# IfThen Syncano Socket

It is IfThen integration with Syncano. It allows you to machines for branching based on comparisons, validations, etc.

## Endpoints

### if-defined

#### Parameters:

      value: '==='


### if-less-than

#### Parameters:

      a: '===',
      b: '===',
      isInclusive: true


### if-greater-than

#### Parameters:

      a: '===',
      b: '===',
      isInclusive: true


### if-equal

#### Parameters:

      a: '===',
      b: '==='


### if-between

#### Parameters:

      value: 3,
      min: 1,
      max: 4


### if-then-finally

#### Parameters:

      bool: true,
      then: '->',
      orElse: '->',
      expectedOutput: '*'


### if-then-finally-sync

#### Parameters:

      bool: true,
      then: '->',
      orElse: '->',
      expectedOutput: '*'

