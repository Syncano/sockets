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

  var id = ctx.api.bookmarks[inputs.bookmark];
  var getDocument = require('machine').build(require('./get-document'));

  getDocument({
    apiEndpoint: inputs.apiEndpoint,
    accessToken: inputs.accessToken,
    ref: inputs.ref,
    id: id
  }).exec({
    error: exits.error,
    notFound: exits.notFound,
    notAuthorized: exits.notAuthorized,
    success: exits.success
  });

}, inputs.accessToken);