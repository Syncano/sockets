var Prismic = require('prismic.io').Prismic;

function linkResolver(doc) {
  if (doc.isBroken) return false;
  return '/documents/' + doc.id + '/' + doc.slug;
}

var mappedIds = inputs.ids.map(function(id) {
  return '"' + id + '"';
}).join(',');

var query = '[[:d = any(document.id, [' + mappedIds + '])]]';
console.log(query);

Prismic.Api(inputs.apiEndpoint, function(err, Api) {
  if (err && err.toString().indexOf('401') !== -1) {
    return exits.notAuthorized(err);
  } else if (err) {
    return exits.error(err);
  }
  var ctx = {
    api: Api,
    ref: inputs.ref || Api.master(),
    linkResolver: function(doc) {
      return linkResolver(doc);
    }
  };
  ctx.api
    .forms('everything')
    .ref(ctx.ref)
    .query(query)
    .submit(function(err, documents) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(documents.results);
    });
}, inputs.accessToken);