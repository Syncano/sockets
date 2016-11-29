/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
var doJSONRequest = require('../lib/do-request');
var getPageContent = require('../lib/get-page-content');


// Example URL to PhantomJSCloud.com:
// http://api.PhantomJsCloud.com/batch/browser/v1/a-demo-key-with-low-quota-per-ip-address/{"batchRequests":[{"targetUrl":"http://www.example.com","requestType":"text","outputAsJson":true,"loadImages":true,"isDebug":true, "timeout":15000, "postDomLoadedTimeout":5000, "userAgent":"PhantomJs.Cloud Rocks", "requestId":"myCustomData01"}]}

// Example batchRequestJSON:
// {
//   "batchRequests": [{
//     "targetUrl": "http://www.example.com",
//     "requestType": "text",
//     "outputAsJson": true,
//     "loadImages": true,
//     "isDebug": true,
//     "timeout": 15000,
//     "postDomLoadedTimeout": 5000,
//     "userAgent": "PhantomJs.Cloud Rocks",
//     "requestId": "myCustomData01"
//   }]
// }

// Reduce array of string URLs into a request object (`batchRequestJSON`)
var batchRequestJSON = _.reduce(inputs.urls, function (batchRequestJSON, url){
  batchRequestJSON.push({
    targetUrl: url,
    requestType: 'text',
    outputAsJson: true,
    loadImages: true,
    isDebug: true,
    timeout: 15000,
    postDomLoadedTimeout: 5000,
    userAgent: "PhantomJs.Cloud Rocks",
    requestId: "myCustomData01"
  });
  return batchRequestJSON;
}, []);


doJSONRequest({
  method: 'post',
  url: util.format('http://api.phantomjscloud.com/batch/browser/v1/%s', inputs.apiKey),
  data: {
    batchRequests: batchRequestJSON
  }
}, function (err, responseBody) {
  if (err) {
    try {
      if (err.status === 402) {
        return (cb.rateLimitExceeded||cb.error)(err.body);
      }
      return cb(err);
    }
    catch(e){}

    return cb(err);
  }

  // Example response from PhantomJSCloud.com:
  // {
  //   "status": "success",
  //   "callbackUrl": "http://api.PhantomJsCloud.com/callback/browser/v1/9854187e3d90e7d7573037f8cf6c1b82c47860bf/2c36c4d05913bc7ff8a09da9a3bf995f"
  // }

  // Now get the HTML page content for each URL.
  getPageContent({url: responseBody.callbackUrl}, function (err, responseBody) {
    if (err) {
      return cb(err);
    }
    return cb(null, responseBody);
  });
});