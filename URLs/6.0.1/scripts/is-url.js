// From https://gist.github.com/dperini/729294
var re_weburl = new RegExp(
  "^" +
  // protocol identifier
  "(?:(?:[a-z][a-z0-9]+)://)" +
  // user:pass authentication
  "(?:\\S+(?::\\S*)?@)?" +
  "(?:" +
  // IP address exclusion
  // private & local networks
  "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
  "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
  "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
  // IP address dotted notation octets
  // excludes loopback network 0.0.0.0
  // excludes reserved space >= 224.0.0.0
  // excludes network & broacast addresses
  // (first & last IP address of each class)
  "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
  "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
  "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
  "|" +
  // host name
  "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
  // domain name
  "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
  // TLD identifier (optional, to allow http://localhost)
  "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))?" +
  ")" +
  // port number
  "(?::\\d{2,5})?" +
  // resource path
  "(?:/\\S*)?" +
  "$", "i"
);

// If the input string can pass through the regex above, it's a valid URL,
// so we can return `true` through our `success` exit.
if (re_weburl.test(inputs.string)) {
  return exits.success(true);
}

// Otherwise return `false` through the `invalid` exit.
return exits.success(false);