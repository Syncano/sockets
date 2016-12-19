// Default input values
inputs.apiUrl = inputs.apiUrl || defaultAPIURL;
inputs.sortByKey = inputs.sortByKey || defaultSortByKey;
inputs.sortOrder = inputs.sortOrder || defaultSortOrder;
inputs.page = inputs.page || defaultPage;
inputs.query = inputs.query || '';

// Send request to Kickass Torrents
var Http = require('machinepack-http');
Http.sendHttpRequest({
  baseUrl: inputs.apiUrl,
  url: '/api/v2/list_movies.json',
  method: 'get',
  params: {
    query_term: inputs.query,
    sort_by: inputs.sortByKey,
    order_by: inputs.sortOrder,
    // page: inputs.page,
  }
}).exec({
  // OK.
  success: function(result) {
    try {
      var responseBody = JSON.parse(result.body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }
    var _ = require('lodash');
    var movies = responseBody.data.movies;
    // console.log(JSON.stringify(movies, undefined, 2));
    var results = _.map(movies, function(movie) {
      return _.map(movie.torrents, function(torrent) {
        return {
          title: movie.title,
          category: 'movies',
          year: movie.year,
          imdb: movie.imdb_code,
          genres: movie.genres,
          hash: torrent.hash,
          url: torrent.url,
          quality: torrent.quality,
          seeders: torrent.seeds,
          peers: torrent.peers,
          size: torrent.size_bytes,
          dateCreated: new Date(torrent.date_uploaded),
          provider: 'YTS',
          verified: true,
          // meta: movie,
        };
      });
    });
    // console.log(results);
    var torrents = _.flatten(results);
    // console.log(JSON.stringify(torrents, undefined, 2));
    return exits.success();
  },
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
});