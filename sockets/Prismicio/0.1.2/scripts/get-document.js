var Prismic = require('prismic.io').Prismic;

function linkResolver(doc) {
  if (doc.isBroken) return false;
  return '/documents/' + doc.id + '/' + doc.slug;
}

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
    .query('[[:d = at(document.id, "' + inputs.id + '")]]')
    .submit(function(err, documents) {
      var results = documents.results;
      var doc = results && results.length ? results[0] : undefined;
      if (err) {
        exits.error(err);
      } else if (doc && (!inputs.slug || doc.slug == inputs.slug)) {
        if (inputs.html) {
          exits.success(doc.asHtml(ctx.linkResolver));
        } else {
          exits.success(doc);
        }
      } else if (doc && doc.slugs.indexOf(inputs.slug) > -1 && exits.newSlug) {
        exits.newSlug(doc);
      } else {
        exits.notFound();
      }
    });
}, inputs.accessToken);