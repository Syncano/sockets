var request = require('request');

request.get({
  url: 'https://api.twitter.com/1.1/users/show.json',
  qs: (function _determineParams (){
    // EITHER screen name or user id is required, but NOT BOTH!
    // (for now we just allow username)
    var _params = {};
    if (inputs.screenName) {
      _params.screen_name = inputs.screenName;
    }
    return _params;
  })(),
  oauth: {
    consumer_key: inputs.consumerKey,
    consumer_secret: inputs.consumerSecret,
    token: inputs.accessToken,
    token_secret: inputs.accessSecret
  },
  json: true
}, function(err, response, body) {
  if (err) {
    return exits.error(err);
  }
  if (response.statusCode > 299 || response.statusCode < 200) {
    return exits.error(response.statusCode);
  }

  return exits.success({
    name: body.name,
    screenName: body.screen_name,
    profileImageUrl: body.profile_image_url,
    profileImageUrlHttps: body.profile_image_url_https,
    bannerImageUrl: body.profile_banner_url,
    location: body.location,
    description: body.description,
    url: body.url,
    followersCount: body.followers_count,
    friendsCount: body.friends_count,
    listedCount: body.listed_count,
    createdAt: (new Date(body.created_at)).toJSON(),
    favoritesCount: body.favourites_count,
    utcOffset: body.utc_offset,
    timezone: body.time_zone,
    isVerified: body.verified,
    language: body.lang,
    isGeoEnabled: body.geo_enabled,
    statusesCount: body.statuses_count,
    isProtected: body.protected,
    isSuspended: body.suspended
  });
});