const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const { branchName } = helper.validationFields;

  if (!branchName) {
    helper.fail(`N'oubliez pas de fournir le nom de la branche que vous avez créée!`);
    return;
  }

  try {
    await commandExists('git');
    const gitBranchList = await exec(`git branch --list ${branchName}`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const branches = gitBranchList.stdout
      .split('\n')
      .map(branch => branch.trim());

    const branchCheckedOutName = `* ${branchName}`;

    if (
      !branches.includes(branchName) &&
      !branches.includes(branchCheckedOutName)
    ) {
      helper.fail(
        `Nous n'avons pas pu trouver la branche nommée "${branchName}" in your respository!`
      );
      return;
    }

    if (!branches.includes(branchCheckedOutName)) {
      helper.fail(
        `Nous avons trouvé votre branche. "${branchName}" mais il semble que vous n'ayez pas encore vérifié !`
      );
      return;
    }

    helper.success(
      `Il semble que vous ayez créé et vérifié la branche. "${branchName}" correctement !`,
      [{ name: 'OPEN_PIXEL_ART_BRANCH', value: branchName }]
    );
  } catch (err) {
    helper.fail(
      `Nous avons rencontré un problème en essayant de valider la création de votre branche !
      
      ${err}`
    );
  }
};
