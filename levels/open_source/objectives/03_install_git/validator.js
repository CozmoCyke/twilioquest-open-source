const commandExists = require('command-exists');

module.exports = async helper => {
  try {
    await commandExists('git');

    helper.success(`Nous avons trouvé git installé sur votre ordinateur !`);
  } catch (err) {
    helper.fail(`
    Nous n'avons pas trouvé la commande git dans le chemin de votre système. Si vous avez installé
    git pour la première fois pendant que vous jouez à TwilioQuest, il se peut que vous deviez quitter
    et relancer le jeu TwilioQuest pour vous assurer que la commande est présente..
    `);
  }
};
