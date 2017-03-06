# NPM Syncano Socket

It is NPM integration with Syncano. It allows you to work with the public npm repository.

## Endpoints

### list-packages

#### Parameters:

      query: 'sails-hook-'

,
### download-package

#### Parameters:

      name: 'isarray',
      version: '0.0.1',
      registry: 'https://your-private-registry.npmjs.org',
      destination: '/Users/mikermcneil/dogfood-promo-site'

,
### list-packages-with-details

#### Parameters:

      query: 'sails'

,
### install-package

#### Parameters:

      name: 'express',
      version: '~1.0.0',
      dir: '/Users/mikermcneil/dogfood-promo-site',
      save: false,
      saveDev: false,
      saveExact: false,
      prefix: './path-to-project',
      loglevel: 'warn'

,
### parse-package-json

#### Parameters:

      json: '{...packagejson contents...}'

,
### publish

#### Parameters:

      dir: '/Users/mikermcneil/dogfood-promo-site',
      restrictAccess: true

,
### unpublish

#### Parameters:

      packageName: 'cheerio',
      version: '1.0.0'

,
### open-source

#### Parameters:

      packageName: '@mattmueller/cheerio'

,
### restrict

#### Parameters:

      packageName: '@mattmueller/cheerio'

,
### fetch-info

#### Parameters:

      packageName: 'browserify'

,
### arrayify-dependencies

#### Parameters:

      dependencies: [object Object]

,
### unarrayify-dependencies

#### Parameters:

      dependencies: [object Object]

,
### install-dependencies

#### Parameters:

      dir: '/Users/mikermcneil/dogfood-promo-site'

,
### get-latest-version

#### Parameters:

      packageName: 'browserify'

,
### validate-version

#### Parameters:

      string: '1.0.0',
      strict: false

,
### compare-versions

#### Parameters:

      a: '1.2.5',
      b: '4.9.0'

,
### is-version-compatible

#### Parameters:

      version: '1.2.5',
      semverRange: '^4.9.0'

