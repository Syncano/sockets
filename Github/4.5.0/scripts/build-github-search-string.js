var util = require('util');
var _ = require('lodash');
var Datetime = require('machinepack-datetime');

// The local variable `q` will be used to build up the search string
// iteratively in the code below.  We'll start by building it as an
// array of strings, then mash it together at the end using `.join()`.
var q = [];

// Filter on owner+repo
if (inputs.owner && inputs.repo) {
  q.push( util.format( 'repo:%s/%s', inputs.owner, inputs.repo) );
}
// or just owner
else if (inputs.owner) {
  q.push( util.format( 'user:%s', inputs.owner) );
}

// Filter on labels (only include issue if it has _all_ of these labels)
if (!_.isUndefined(inputs.withAllOfTheseLabels)) {
  q.push(
    _.map(inputs.withAllOfTheseLabels, function (labelName){
      return 'label:"'+labelName+'"'; // << use double quotes to support labels with whitespace (see https://github.com/isaacs/github/issues/65#issuecomment-63971607)
    })
    .join(' ')
  );
}

// Filter on labels (only include issue if it has _none_ of these labels)
if (!_.isUndefined(inputs.withNoneOfTheseLabels)) {
  q.push(
    _.map(inputs.withNoneOfTheseLabels, function (labelName){
      return '-label:"'+labelName+'"'; // << use double quotes to support labels with whitespace (see https://github.com/isaacs/github/issues/65#issuecomment-63971607)
    })
    .join(' ')
  );
}

// Filter on issue state (open vs. closed)
if (!_.isUndefined(inputs.state)) {
  q.push( 'state:'+inputs.state );
}

// Filter on issue type (pr vs. issue)
if (!_.isUndefined(inputs.type)) {
  q.push( 'type:'+inputs.type );
}

// Filter issues based on when they were last updated.
if (!_.isUndefined(inputs.lastUpdatedBefore)) {
  var dateInstance = Datetime.parseTimestamp({
    timestamp: inputs.lastUpdatedBefore,
    timezone: 'America/Chicago'
  }).execSync();
  var formattedDateStr = util.format('%s-%s-%s',
    dateInstance.year,
    (dateInstance.month<10?'0':'')+dateInstance.month,
    (dateInstance.date<10?'0':'')+dateInstance.date
  );
  q.push( 'updated:<'+formattedDateStr );
}

// Now smash the strings together, separating them w/ spaces...
q = q.join(' ');

// and we're done!
return exits.success(q);