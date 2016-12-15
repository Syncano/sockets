// Default input values
inputs.baseUrl = inputs.baseUrl || defaultBaseUrl;

var request = require('request');
var url = inputs.baseUrl + '/showlist/';
request(url, function(error, response, html) {
  if (error) {
    return exits.error(error);
  } else {
    try {
      var cheerio = require('cheerio');
      var $ = cheerio.load(html);
      var _ = require('lodash');
      var $els = $('table.forum_header_border tr td:first-child.forum_thread_post a.thread_link');
      var shows = [];
      $els.each(function(i, e) {
        var title = $(e).text();
        // Handle show titles that start with The
        var suffixThe = ', The';
        var prefixThe = 'The ';
        if (_.endsWith(title, suffixThe)) {
          title = prefixThe + _.replace(title, suffixThe, '');
        }
        var url = $(e).attr('href');
        var r = url.match(/\/shows\/(\d+)\/([^\/]+)/);
        var eid = parseInt(r[1]);
        var slug = r[2];
        var show = {
          id: eid,
          title: title,
          url: url,
          slug: slug
        };
        shows.push(show);
      });
      return exits.success(shows);
    } catch (error) {
      return exits.error(error);
    }
  }
});