var util = require('util');
var _ = require('lodash');

var moduleMetadata = {};
var _data;

try {
  _data = JSON.parse(inputs.json);
}
catch (e){
  return exits.invalid(e);
}

try {
  // Include basic metadata
  moduleMetadata.name = _data._id || _data.name;
  moduleMetadata.description = _data.description;
  moduleMetadata.keywords = _data.keywords;
  moduleMetadata.version = (function (){
    if (_data['dist-tags']) {
      return _data['dist-tags'].latest;
    }
    return _data.version;
  })();
  moduleMetadata.latestVersionPublishedAt = _data.time ? _data.time.modified : '';
  moduleMetadata.author = _data.author;
  moduleMetadata.license = _data.license;

  // Determine where to find metadata about the latest version
  var latestVersion = _data.versions ? _data.versions[moduleMetadata.version] : _data;

  // Parse dependencies.
  moduleMetadata.dependencies = _.reduce(latestVersion.dependencies, function (memo, semverRange, name){
    memo.push({
      name: name,
      semverRange: semverRange
    });
    return memo;
  }, []);

  // Build an NPM url for convenience.
  moduleMetadata.npmUrl = util.format('http://npmjs.org/package/%s', moduleMetadata.name);

  // Build the source code URL, if applicable.
  moduleMetadata.sourceUrl = (function extractRepoUrl (){
    var repoUrl;

    // First grab the repoUrl from the npm package.json data
    if (_.isString(latestVersion.repository)) {
      repoUrl = latestVersion.repository;
    }
    else if (!_.isObject(latestVersion.repository)) {
      return undefined;
    }
    else {
      try {
        repoUrl = latestVersion.repository.url;
      }
      catch (e) { return undefined; }
    }

    // Then, ensure that it is an http[s] Github URL, by coercing it into one if it isn't already.
    // (also makes sure that the URL has a trailing slash)
    repoUrl = repoUrl.replace(/^.*github\.com[:\/]/, 'http://github.com/');
    repoUrl = repoUrl.replace(/\.git$/, '');
    repoUrl = repoUrl.replace(/\/*$/, '/');

    // i.e.
    // something like "git://github.com/irlnathan/machinepack-facebook.git" or "git@github.com:irlnathan/machinepack-facebook.git"
    // becomes something like "http://github.com/irlnathan/machinepack-facebook"

    return repoUrl;
  })();

  // Normalize contributors list from NPM maintainers, contributors, & author properties.
  moduleMetadata.contributors = (function buildAggregatedContributorsList () {
    var contributorsList = [];
    if (latestVersion.author) {
      contributorsList.push(latestVersion.author);
    }
    if (_.isArray(latestVersion.contributors)) {
      contributorsList = contributorsList.concat(latestVersion.contributors);
    }
    if (_.isArray(latestVersion.maintainers)) {
      contributorsList = contributorsList.concat(latestVersion.maintainers);
    }

    contributorsList = _.map(contributorsList, function (contributor) {
      return {
        name: _.isString(contributor) ? contributor : contributor.name,
        email: contributor.email || undefined
      };
    });

    // Remove duplicates
    contributorsList = _.uniq(contributorsList, false, function (contributor) { return contributor.name; });

    return contributorsList;
  })();
}
catch (e) {
  return exits.invalid(e);
}

return exits.success(moduleMetadata);