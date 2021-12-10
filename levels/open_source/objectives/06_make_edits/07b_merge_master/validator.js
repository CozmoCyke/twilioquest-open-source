const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_DIR, TQ_OPEN_PIXEL_ART_BRANCH } = helper.env;

  try {
    await commandExists('git');
    const gitLogLastMasterCommit = await exec(
      `git log master -n 1 --pretty=format:"%H"`,
      {
        cwd: TQ_OPEN_PIXEL_ART_DIR,
      }
    );

    const latestMasterCommit = gitLogLastMasterCommit.stdout;

    const gitBranchListContainingMasterCommit = await exec(
      `git branch --contains ${latestMasterCommit}`,
      {
        cwd: TQ_OPEN_PIXEL_ART_DIR,
      }
    );

    const branchList = gitBranchListContainingMasterCommit.stdout;

    if (!branchList.includes(TQ_OPEN_PIXEL_ART_BRANCH)) {
      helper.fail(
        `Le dernier commit sur master "${latestMasterCommit}" n'a pas été trouvé dans votre branche "${TQ_OPEN_PIXEL_ART_BRANCH}"!`
      ) ;
      retour ;
    }

    return helper.success(
      `Nous avons trouvé le dernier commit sur master dans votre branche "${TQ_OPEN_PIXEL_ART_BRANCH}"!`
    ) ;
  } catch (err) {
    helper.fail(
      `Quelque chose n'a pas fonctionné quand nous avons essayé de valider si votre branche a été fusionnée avec master !
      
      ${err}`
    );
  }
};
