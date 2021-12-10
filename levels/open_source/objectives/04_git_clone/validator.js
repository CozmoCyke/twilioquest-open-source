const jetpack = require('fs-jetpack');
const path = require('path');

module.exports = async helper => {
  const { repositoryFilePath } = helper.validationFields;

  if (!repositoryFilePath) {
    helper.fail(`N'oubliez pas de fournir un chemin d'accès au fichier de répertoire !`);
    return;
  }

  try {
    const directoryExists = await jetpack.existsAsync(repositoryFilePath);

    if (directoryExists !== 'dir') {
      helper.fail(
        `Nous n'avons pas pu trouver de répertoire au chemin que vous avez fourni ! -> ${repositoryFilePath}`
      );
      return;
    }

    const packagePath = path.join(repositoryFilePath, 'package.json');
    const packageFileExists = await jetpack.existsAsync(packagePath);

    if (packageFileExists !== 'file') {
      helper.fail(
        `Nous n'avons pas pu trouver le fichier du paquet dans le répertoire que vous avez fourni ! A-t-il été cloné correctement ? -> ${packagePath}`
      );
      return;
    }

    const packageContents = await jetpack.readAsync(packagePath, 'json');

    if (packageContents.name !== 'open-pixel-art') {
      helper.fail(
        `Le fichier du paquet dans ce répertoire n'était pas pour le bon projet ! A-t-il été cloné correctement ? -> ${packagePath}`
      );
      return;
    }

    helper.success(
      `Il semble que vous ayez cloné le répertoire Open Pixel Art correctement !`,
      [{ name: 'OPEN_PIXEL_ART_DIR', value: repositoryFilePath }]
    );
  } catch (err) {
    helper.fail(`Un problème est survenu lors de la validation du clone de votre répertoire !
    
    ${err}`);
  }
};
