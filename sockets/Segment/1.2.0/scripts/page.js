var SegmentIO = require('analytics-node');
var api = new SegmentIO(inputs.writeKey);

var opts = {
  userId: inputs.userId,
  properties: inputs.properties||{},
  integrations: inputs.integrations||{
    All: true,
    Mixpanel: false,
    Salesforce: false
  }
};

if (inputs.pageName) {
  opts.name = inputs.pageName;
}
if (inputs.pageCategory) {
  opts.category = inputs.pageCategory;
}

api.page(opts, function(err, batch){
  if (err) return exits.error(err);
  return exits.success();
});