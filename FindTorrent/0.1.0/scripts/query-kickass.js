var _ = require('lodash');

// Default input values
inputs.apiUrl = inputs.apiUrl || defaultAPIURL;
inputs.sortByKey = inputs.sortByKey || defaultSortByKey;
inputs.sortOrder = inputs.sortOrder || defaultSortOrder;
inputs.page = inputs.page || defaultPage;
inputs.category = inputs.category || defaultCategory;
inputs.query = inputs.query || '';

var query = inputs.query + 'category:'+inputs.category;

// Send request to Kickass Torrents
var Http = require('machinepack-http');
Http.sendHttpRequest({
  baseUrl: inputs.apiUrl,
  url: '/json.php',
  method: 'get',
  params: {
    q: query,
    field: inputs.sortByKey,
    sorter: inputs.sortOrder,
  }
}).exec({
  // OK.
  success: function(result) {
    try {
      var responseBody = JSON.parse(result.body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }
    var torrents = responseBody.list;
    var count = torrents.length;
    torrents = _.map(torrents, function(torrent) {
      return {
        title: torrent.title,
        category: torrent.category.toLowerCase(),
        url: torrent.torrentLink,
        verified: !!torrent.verified,
        votes: torrent.votes,
        seeders: torrent.seeds,
        leechers: torrent.leechs,
        peers: torrent.peers,
        hash: torrent.hash,
        size: torrent.size,
        dateCreated: new Date(torrent.pubDate),
        provider: 'Kickass',
        meta: torrent,
      };
    });
    // var response = {
    //   page: {
    //     number: inputs.page,
    //     size: count,
    //     total: parseInt(responseBody.total_results),
    //   },
    //   torrents: torrents,
    // };
    // return exits.success(response);
    return exits.success(torrents);
  },
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
});