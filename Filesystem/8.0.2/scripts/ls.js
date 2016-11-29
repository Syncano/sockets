var path = require('path');
var Walker = require('walker');

// Ensure we've got an absolute path.
inputs.dir = path.resolve(inputs.dir);

// Determine the depth of the top-level directory we're walking,
// for comparison later on.
var topLvlDirDepth = inputs.dir.split(path.sep).length;

// Initialize the walker and teach it to skip walking directories
// that are:
// • deeper than requested, or
// • hidden (if the `includeHidden` input is set to false)
var walker = Walker(inputs.dir);
walker.filterDir(function(dir, stat) {
  // Too deep
  if (dir.split(path.sep).length > (topLvlDirDepth + inputs.depth)) {
    return false;
  }
  // Too hidden
  if (path.basename(dir).match(/^\./) && !inputs.includeHidden) {
    return false;
  }
  return true;
});

// Accumulate results array by listing file, directory, and/or symlink
// entries from the specified directory.
var results = [];
if (inputs.includeFiles) {
  walker.on('file', function (entry, stat) {
    // Add the new entry to our result list unless it is:
    //  • hidden (and the `includeHidden` input is set to false), or
    //  • too deep
    var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
    var tooDeep = entry.split(path.sep).length > (topLvlDirDepth + inputs.depth);
    if ( !tooHidden && !tooDeep  ) {
      results.push(entry);
    }
  });
}
if (inputs.includeDirs) {
  walker.on('dir', function (entry, stat) {
    // If this is the top-level directory, exclude it.
    if (entry === inputs.dir) { return; }
    // Add the new entry to our result list unless it is:
    //  • hidden (and the `includeHidden` input is set to false)
    var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
    if ( !tooHidden ) {
      results.push(entry);
    }
  });
}
if (inputs.includeSymlinks) {
  walker.on('symlink', function (entry, stat) {
    // If this is the top-level directory, exclude it.
    if (entry===inputs.dir) { return; }
    // Add the new entry to our result list unless it is:
    //  • hidden (and the `includeHidden` input is set to false)
    var tooHidden = path.basename(entry).match(/^\./) && !inputs.includeHidden;
    if ( !tooHidden ) {
      results.push(entry);
    }
  });
}

// When walking is done, because of an error or otherwise,
// return the results.
var spinlock;
walker.on('error', function (err){
  if (spinlock) { return; }
  spinlock = true;
  if (err.code === 'ENOENT') {
    return exits.doesNotExist();
  }
  return exits.error(err);
});
walker.on('end', function (){
  if (spinlock) { return; }
  spinlock = true;
  return exits.success(results);
});