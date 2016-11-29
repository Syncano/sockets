var GS = require('grooveshark-downloader');

if(!inputs.overwrite) inputs.overwrite = false;

GS.Grooveshark.getPlaylistSongsList(inputs.id, function(err, res, body){
  if(err) return exits.error(err);

  var parsedBody = {};
  try{
    parsedBody = JSON.parse(body);
  }catch(e){
    return exits.error('Error parsing body: ', e);
  }

  if(parsedBody.result.PlaylistID === 0) return exits.notFound();

  var async = require('async');
  var fs = require('fs');

  if(!fs.existsSync(inputs.path)){
    var mkdirp = require('mkdirp');
    mkdirp.sync(inputs.path);
  }

  async.mapSeries(parsedBody.result.Songs,
    function downloadSong(song, next) {

      var request = require('request');

      var fileUrl = inputs.path + '/' + song.Name + '.mp3';

      if(fs.existsSync(fileUrl) && !inputs.overwrite) return next();

      GS.Grooveshark.getStreamingUrl(song.SongID, function(err, streamUrl) {
        if(err){
          if(err === 'banned') return exits.downloadLimitExceded();
          return next(err);
        }

        request
          .get(streamUrl)
          .on('end', function downloadCompleted() {
            next();
          })
          .on('error', function errorDownloading(err) {
            next(err);
          }).pipe(fs.createWriteStream(fileUrl));

       });

    }, function playlistDownloaded (err) {
      if(err) return exits.error(err);
      return exits.success();
    }
  );

});