var Proc = require('machinepack-process');

Proc.spawn({
  command: 'git pull ' + inputs.remote + ' ' + inputs.branch,
  dir: inputs.destination
}, {
  error: function (err) {
    try {
      // console.log(err, Object.keys(err), err.signal, err.killed, err.code);
      if (err.message.match(/Not a git repository/)) {
        return exits.notRepo();
      }
      if (err.message.match(/Your local changes to the following files would be overwritten by merge/) || err.message.match(/Please, commit your changes or stash them before you can merge/)) {
        return exits.uncommittedChanges();
        // TODO: attempt to parse out a list of the files which would be overwritten by merge
        /*
        Error: Command failed: From github.com:mikermcneil/machinepack-git
         * branch            master     -> FETCH_HEAD
           874fab0..afa9e77  master     -> origin/master
        error: Your local changes to the following files would be overwritten by merge:
          README.md
        Please, commit your changes or stash them before you can merge.
        Aborting

            at ChildProcess.exithandler (child_process.js:637:15)
            at ChildProcess.EventEmitter.emit (events.js:98:17)
            at maybeClose (child_process.js:743:16)
            at Socket.<anonymous> (child_process.js:956:11)
            at Socket.EventEmitter.emit (events.js:95:17)
            at Pipe.close (net.js:465:12)
         */
      }

      if (err.message.match(/Pull is not possible because you have unmerged files/i)) {
        // (Note that err.code should also be === 1 in this case)
        return exits.unresolvedConflicts();
         /*
         Error: Command failed: Pull is not possible because you have unmerged files.
          Please, fix them up in the work tree, and then use 'git add/rm <file>'
          as appropriate to mark resolution, or use 'git commit -a'.

              at ChildProcess.exithandler (child_process.js:637:15)
              at ChildProcess.EventEmitter.emit (events.js:98:17)
              at maybeClose (child_process.js:743:16)
              at Socket.<anonymous> (child_process.js:956:11)
              at Socket.EventEmitter.emit (events.js:95:17)
              at Pipe.close (net.js:465:12)
          */
      }



      // In the case where new merge conflicts are created locally and local repo gets into an unmerged state,
      // the code will always be 1.
      //
      // BUT for some reason, we can't access the output you normally see on the CLI:
      // ```
      // Auto-merging README.md
      // CONFLICT (content): Merge conflict in README.md
      // Automatic merge failed; fix conflicts and then commit the result.
      // ```
      //
      // Instead we get:
       /*
       Error: Command failed: From github.com:mikermcneil/machinepack-git
         * branch            master     -> FETCH_HEAD

            at ChildProcess.exithandler (child_process.js:637:15)
            at ChildProcess.EventEmitter.emit (events.js:98:17)
            at maybeClose (child_process.js:743:16)
            at Process.ChildProcess._handle.onexit (child_process.js:810:5)
      */
      if (err.code === 1) {
        return exits.failed(err);
      }

    }
    catch (e){}
    return exits.error(err);
  },
  forbidden: exits.forbidden,
  noSuchDir: exits.noSuchDir,
  success: function (outs) {
    //{
    //  stdout: 'Already up-to-date.
',
    //  stderr: 'From github.com:mikermcneil/scribe
 * branch            master     -> FETCH_HEAD
'
    //}

    /*
    {
      stdout: 'Updating 3d37349..d513869
Fast-forward
 api/controllers/StaticController.js                | 82 ++++++++++++++++++++++
 assets/js/cloud/misc.endpoints.js....                              |  6 +-
 23 files changed, 340 insertions(+), 32 deletions(-)
 create mode 100644 assets/templates/shared-elements/modals/name-grouped-thing.html
',
      stderr: 'From github.com:someapp/someapp-july
 * branch            master     -> FETCH_HEAD
   3d37349..d513869  master     -> origin/master
' }
     */
    return exits.success();
  }
});