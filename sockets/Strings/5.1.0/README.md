# Strings Syncano Socket

It is Strings integration with Syncano. It allows you to work with strings.

## Endpoints

### match

#### Parameters:

      string: 'hello world',
      regexp: 'world',
      caseInsensitive: true

,
### construct

#### Parameters:

      value: '==='

,
### capitalize

#### Parameters:

      string: 'villeriño',
      at: 0

,
### length

#### Parameters:

      string: 'guido villeriño'

,
### trunc

#### Parameters:

      string: 'Christian van der Henst',
      maxLength: 15,
      omission: '...',
      pretty: true

,
### trim

#### Parameters:

      string: '   I went to the store to get some more milk.     '

,
### replace

#### Parameters:

      string: 'Hello world!',
      regexp: 'World',
      replacement: 'Mumbai',
      caseInsensitive: true,
      global: true,
      multiline: true

,
### split

#### Parameters:

      string: 'Hello world!',
      regexp: '\s',
      caseInsensitive: true

,
### deburr

#### Parameters:

      string: 'déjà vu, Günther. Just more of your saß.'

,
### slice

#### Parameters:

      string: 'McGee',
      start: 2,
      end: 5

,
### at

#### Parameters:

      string: 'villeriño',
      at: 7

,
### join

#### Parameters:

      strings: foo,
      separator: ','

,
### template

#### Parameters:

      templateStr: 'Hi there, Miss <%= me.lastName %>!',
      data: [object Object]

,
### ensure-uniq

#### Parameters:

      string: 'Siri',
      existingStrings: Siri,
      caseSensitive: false

,
### to-stream

#### Parameters:

      string: 'foo bar baz'

,
### random

#### Parameters:


,
### to-lower-case

#### Parameters:

      string: 'Some stuff and THINGS 235823523'

,
### to-upper-case

#### Parameters:

      string: 'Some stuff and THINGS 235823523'

,
### to-kebab-case

#### Parameters:

      string: 'fooBar_baz bong___'

,
### to-camel-case

#### Parameters:

      string: 'foo-bar-baz'

