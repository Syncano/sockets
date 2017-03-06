# Assets Syncano Socket

It is Assets integration with Syncano. It allows you to experimental utilities for preparing fonts, images, javascript files, and less stylesheets, then publishing them to npm as production-ready asset packages.

## Endpoints

### minify-javascript-assets

#### Parameters:

      dir: './my-stuff/my-proj/js'

,
### copy-fonts

#### Parameters:

      fontsSrcPath: './foo/fonts',
      outputDir: './foo/.tmp/processing'

,
### copy-images

#### Parameters:

      imgSrcPath: './foo/images',
      outputDir: './my-projects/some-assets/.tmp/processing'

,
### productionify

#### Parameters:

      srcDir: '/code/treeline-assets',
      prodPkgName: '@treelinehq/whatever'

,
### write-readme-and-package-json

#### Parameters:

      srcDir: './my-projects/some-assets/',
      outputDir: './my-projects/some-assets/.tmp/processing',
      prodPkgName: '@automatic/socket.io-client',
      prodPkgDescription: 'This package contains the production-compressed release of an asset package (i.e. shared LESS stylesheets, client-side JavaScript files, fonts, and/or images).',
      prodPkgVersion: '1.0.5',
      author: 'Automatic',
      copyright: 'Copyright &copy; 2015, Guillermo Rauch',
      license: 'MIT',
      homepageUrl: 'http://socket.io'

,
### write-minified-javascript

#### Parameters:

      outputDir: './my-projects/some-assets/.tmp/processing',
      jsSrcDir: './my-projects/some-assets/js'

,
### write-compiled-stylesheet-if-relevant

#### Parameters:

      outputDir: './my-projects/some-assets/.tmp/processing',
      lessSrcDir: './foo/styles/'

,
### compile-less-stylesheets

#### Parameters:

      lessSrcDir: './foo/styles',
      minify: false

