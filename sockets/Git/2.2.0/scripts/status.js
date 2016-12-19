var Proc = require('machinepack-process');

Proc.spawn({
  command: 'git status',
  dir: inputs.dir
}, {
  error: function (err) {
    // console.log(err.killed, err.code, err.sigal);
    // always seems to be `killed: false`, `code: 128`, `signal: null` (or undefined)
    try {
      if (err.message.match(/Not a git repository/)) {
        return exits.notRepo();
      }
    }
    catch (e){}
    return exits.error(err);
  },
  forbidden: exits.forbidden,
  noSuchDir: exits.noSuchDir,
  success: function (outs) {
    // outs.stdout =>
    //  • 'On branch master
Your branch is up-to-date with \'origin/master\'.

nothing to commit, working directory clean
'
    //    -or-
    //  • 'On branch master
Your branch is up-to-date with \'origin/master\'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

\tmodified:   machines/clone.js
\tmodified:   machines/pull-or-clone.js
\tmodified:   machines/pull.js
\tmodified:   machines/status.js
\tmodified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")
',
    return exits.success(outs.stdout);
  }
});