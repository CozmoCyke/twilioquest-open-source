const got = require('got');
const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME, TQ_OPEN_PIXEL_ART_DIR } = helper.env;

  try {
    await commandExists('git');
    const gitRemote = await exec(`git remote -v`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const remoteStrings = gitRemote.stdout.trim().split('\n');
    const remotes = remoteStrings.map(remoteString =>
      remoteString.split(/\s+/)
    );

    const upstreamRemotes = remotes.filter(([name]) => name === 'upstream');

    if (upstreamRemotes.length === 0) {
      helper.fail(
        `Nous n'avons pas trouvé de distant local nommé "upstream" ! En avez-vous déjà créé un ?`
      );
      return;
    }

    const isUpstreamUrlCorrect = remotes.find(
      ([, url]) =>
        url === 'https://github.com/twilio-labs/open-pixel-art.git' ||
        url === 'git@github.com:twilio-labs/open-pixel-art.git'
    );

    if (!isUpstreamUrlCorrect) {
      helper.fail(
        `Nous avons trouvé votre distant "upstream", mais il ne semble pas avoir l'URL correcte.
        
        Elle devrait ressembler à ceci :
        https://github.com/twilio-labs/open-pixel-art.git
        
        Exécutez git remote -v dans votre terminal pour le vérifier !`
      );
      return;
    }

    const openPixelArtResponse = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (openPixelArtResponse.statusCode !== 200) {
      helper.fail(`Nous n'avons pas pu nous connecter au répertoire Open Pixel Art !
      
      ${openPixelArtResponse.statusMessage}`);
      return;
    }

    const playerResponse = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (playerResponse.statusCode !== 200) {
      helper.fail(`Nous n'avons pas trouvé le dépôt "open-pixel-art" pour votre utilisateur. "${TQ_GITHUB_USERNAME}"!
      
      ${playerResponse.statusMessage}`);
      return;
    }

    if (
      JSON.parse(playerResponse.body).commit.sha !==
      JSON.parse(openPixelArtResponse.body).commit.sha
    ) {
      helper.fail(
        `Le dépôt Open Pixel Art et le dépôt "open-pixel-art" pour votre utilisateur "${TQ_GITHUB_USERNAME} ne sont pas synchronisés" ! De nouveaux changements ont pu être ajoutés depuis votre dernière synchronisation. Essayez de vous synchroniser à nouveau !`
      );
      return;
    }

    return helper.success(
      `Le dépôt Open Pixel Art et le dépôt "open-pixel-art" pour votre utilisateur "${TQ_GITHUB_USERNAME} sont synchronisés ! Elles peuvent se désynchroniser à l'avenir si d'autres utilisateurs apportent des modifications au répertoire!`
    );
  } catch (err) {
    helper.fail(
      `Quelque chose s'est mal passé lorsque nous avons essayé de valider si votre fork Open Pixel Art était synchronisé !
      
      ${err}`
    );
  }
};
