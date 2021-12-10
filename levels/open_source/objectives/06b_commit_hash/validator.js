const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_LOCAL_GIT_USER_NAME, TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const commitHash = helper.getNormalizedInput('commitHash');

  try {
    await commandExists('git');
    const gitShowCommit = await exec(`git show ${commitHash}`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const commit = gitShowCommit.stdout;

    if (!commit.includes(TQ_LOCAL_GIT_USER_NAME)) {
      helper.fail(`
        Désolé ! Le hash du commit "${commitHash}" n'a pas votre utilisateur git local "${TQ_LOCAL_GIT_USER_NAME}" listé comme auteur !

        Essayez la commande "git show ${commitHash}" pour voir le commit spécifique que vous venez de fournir.
      `);
      return;
    }

    return helper.success(
      `Nous avons trouvé votre commit pixel pour l'auteur "${TQ_LOCAL_GIT_USER_NAME}"!`
    ) ;
  } catch (err) {
    helper.fail(
      `Quelque chose n'a pas fonctionné lorsque nous avons essayé de valider votre pixel commit !
      
      ${err}`
    );
  }
};
