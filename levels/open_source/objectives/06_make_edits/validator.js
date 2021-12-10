const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const jetpack = require('fs-jetpack');
const path = require('path');

module.exports = async helper => {
  const {
    TQ_OPEN_PIXEL_ART_DIR,
    TQ_LOCAL_GIT_USER_NAME,
    TQ_GITHUB_USERNAME,
  } = helper.env;

  try {
    const pixelsPath = path.join(TQ_OPEN_PIXEL_ART_DIR, '_data', 'pixels.json');
    const pixelFileExists = await jetpack.existsAsync(pixelsPath);

    if (pixelFileExists !== 'file') {
      helper.fail(
        `Nous n'avons pas trouvé le fichier pixels.json dans le dépôt que vous avez fourni ! A-t-il été supprimé ? -> ${pixelsPath}`
      );
      return;
    }

    const pixelsContent = await jetpack.readAsync(pixelsPath, 'json');
    const isPixelPresentWithUsername = pixelsContent.data.find(
      pixel => pixel.username === TQ_GITHUB_USERNAME
    );

    if (!isPixelPresentWithUsername) {
      helper.fail(
        `Nous n'avons pas trouvé de pixel dans le fichier _data/pixels.json avec votre nom d'utilisateur git, ${TQ_GITHUB_USERNAME}!`
      );
      return;
    }

    await commandExists('git');

    // TODO: Figure out how to do this correctly
    // const gitPixelsCommitList = await exec(
    //   `git shortlog -ns _data/pixels.json < /dev/tty`,
    //   {
    //     cwd: TQ_OPEN_PIXEL_ART_DIR,
    //     timeout: 2000,
    //   }
    // );

    const gitPixelsCommitLog = await exec(`git log _data/pixels.json`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
      timeout: 2000,
    });

    // TODO: Figure out how to do this correctly
    // if (!gitPixelsCommitList.stdout.includes(TQ_LOCAL_GIT_USER_NAME)) {
    //   helper.fail(
    //     `We didn't find a commit with your git username, ${TQ_LOCAL_GIT_USER_NAME}, on it for the "_data/pixels.json" file! Have you committed your changes?`
    //   );
    //   return;
    // }

    if (!gitPixelsCommitLog.stdout.includes(TQ_LOCAL_GIT_USER_NAME)) {
      helper.fail(
        `Nous n'avons pas trouvé de commit avec votre nom d'utilisateur git., ${TQ_LOCAL_GIT_USER_NAME}, pour le fichier "_data/pixels.json" ! Avez-vous validé vos modifications ?`
      );
      return;
    }

    helper.success(
      `Il semble que vous ayez correctement ajouté et validé votre nouveau pixel!`
    );
  } catch (err) {
    helper.fail(
      `Nous avons rencontré un problème en essayant de valider l'ajout de votre nouveau pixel !
      
      ${JSON.stringify(err, undefined, 2)}`
    );
  }
};
