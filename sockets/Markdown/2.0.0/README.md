# Markdown Syncano Socket

It is Markdown integration with Syncano. It allows you to work with markdown-formatted text (convert to html, etc.)

## Endpoints

### compile-to-html-file-from-md-file

#### Parameters:

      src: '.tmp/compile-markdown-tree/some/markdown/file.md',
      dest: '.tmp/public/templates/documentation/reference',
      escapeHtml: false,
      compileCodeBlock: '->'


### parse-docmeta-tags

#### Parameters:

      mdString: '# hello world
 it's me, <docmeta name="foo" value="bar"/> 
 some string 

'


### compile-to-html

#### Parameters:

      mdString: '# hello world
 it's me, some markdown string 

 ```js
//but maybe i have code snippets too...
```',
      escapeHtml: false,
      compileCodeBlock: '->'

