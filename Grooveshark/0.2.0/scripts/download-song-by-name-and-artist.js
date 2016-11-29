var GS = require('grooveshark-downloader');
var async = require('async');
var fs = require('fs');
var request = require('request');

GS.Tinysong.getSongInfo(inputs.name, inputs.artist, function(err, info) {
  if(err) return exits.error(err);

  if(!info) return exits.notFound();

  GS.Grooveshark.getStreamingUrl(info.SongID, function(err, streamUrl) {
    if(err){
      if(err === 'banned') return exits.downloadLimitExceded();
      return exits.error(err);
    }

    if(!fs.existsSync(inputs.path)){
      var mkdirp = require('mkdirp');
      mkdirp.sync(inputs.path);
    }

    var songPath = inputs.path + '/' + info.SongName + '.mp3';

    request
      .get(streamUrl)
       .on('error', function(err){
         return exits.error(err);
       })
       .on('end', function(){
         return exits.success(songPath);
       })
       .pipe(fs.createWriteStream(songPath));
  });
});