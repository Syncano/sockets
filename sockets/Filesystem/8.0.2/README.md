# Filesystem Syncano Socket

It is Filesystem integration with Syncano. It allows you to work with the local filesystem; list files, write files, etc.

## Endpoints

### cp

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo',
      destination: '/Users/mikermcneil/.tmp/bar'

,
### ls

#### Parameters:

      dir: '/Users/mikermcneil/.tmp/foo',
      depth: 1,
      includeFiles: true,
      includeDirs: true,
      includeSymlinks: true,
      includeHidden: false

,
### rmrf

#### Parameters:

      path: '/Users/mikermcneil/.tmp/foo'

,
### write

#### Parameters:

      string: 'lots of words, utf8 things you know',
      destination: '/Users/mikermcneil/.tmp/bar',
      force: false

,
### read-json

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo.json',
      schema: '*'

,
### template

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo.tpl',
      destination: '/Users/mikermcneil/.tmp/bar.md',
      data: '===',
      force: false

,
### read

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo'

,
### write-json

#### Parameters:

      json: '*',
      destination: '/Users/mikermcneil/.tmp/bar.json',
      force: false

,
### mv

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo',
      destination: '/Users/mikermcneil/.tmp/bar'

,
### exists

#### Parameters:

      path: '/Users/mikermcneil/.tmp/foo'

,
### mkdir

#### Parameters:

      destination: '/Users/mikermcneil/.tmp/bar',
      force: false

,
### ensure-dir

#### Parameters:

      path: '/foo/bar/baz'

,
### ensure-json

#### Parameters:

      path: '/Users/mikermcneil/.tmp/foo.json',
      schema: '*'

,
### write-sync

#### Parameters:

      string: 'lots of words, utf8 things you know',
      destination: '/Users/mikermcneil/.tmp/bar',
      force: false

,
### read-sync

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo'

,
### read-stream

#### Parameters:

      source: '/Users/mikermcneil/.tmp/foo'

,
### write-stream

#### Parameters:

      sourceStream: '===',
      destination: '/Users/mikermcneil/.tmp/bar.json',
      force: false

