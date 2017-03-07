# JavaScript Syncano Socket

It is JavaScript integration with Syncano. It allows you to machines for working with javascript code strings.

## Endpoints

### validate-varname

#### Parameters:

      string: 'foo$barz'


### minify

#### Parameters:

      javascript: 'var z = 123;\nfunction abcz(a, b, c){\nalert(a, b, c, z);}\n'


### coerce-varname

#### Parameters:

      string: 'foo-bar-baz',
      force: false


### beautify

#### Parameters:

      code: 'alert(
"hi it's me" + 
' and i sure am messy")
var x   =1+1;
',
      useTabs: false,
      numSpaces: 2

