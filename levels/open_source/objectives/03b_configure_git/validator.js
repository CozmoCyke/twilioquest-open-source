const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  try {
    await commandExists('git');
  } catch (err) {
    helper.fail(`Nous n'avons pas trouvé de ligne de commande git installée sur votre ordinateur !`);
    return;
  }

  try {
    const gitConfigList = await exec('git config --list');

    if (!gitConfigList.stdout.includes('user.email=')) {
      helper.fail(`Nous n'avons pas trouvé l'email configuré correctement!`);
      return;
    }

    if (!gitConfigList.stdout.includes('user.name=')) {
      helper.fail(`Nous n'avons pas trouvé votre nom d'utilisateur correctement configuré!`);
      return;
    }

    const gitConfigOptions = gitConfigList.stdout.split('\n');
    const gitUserNameOption = gitConfigOptions.find(option =>
      option.includes('user.name=')
    );
    const [, userName] = gitUserNameOption.trim().split('=');

    helper.success(
      `Il semble que votre email et votre nom soient correctement configurés !`,
      [{ name: 'LOCAL_GIT_USER_NAME', value: userName }]
    );
  } catch (err) {
    helper.fail(`Un problème est survenu lors de la validation de votre configuration git !
    
    ${err}`);
  }
};
