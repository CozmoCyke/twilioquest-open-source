const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME } = helper.env;
  const prNumber = helper.getNormalizedInput('prNumber');

  try {
    const response = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/pulls/${prNumber}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(
        `Nous n'avons pas trouvé la Pull Request #${prNumber} sur le répertoire distant d'Open Pixel Art"!`
        ) ;
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);

    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(
        `Nous avons trouvé la Pull Request #${prNumber} sur le dépôt distant Open Pixel Art, mais elle n'appartient pas à votre utilisateur GitHub "${TQ_GITHUB_USERNAME}"!`
      ) ;
      return;
    }

    return helper.success(
      `Nous avons trouvé votre demande de retrait #${prNumber} sur le répertoire distant d'Open Pixel Art pour votre utilisateur GitHub "${TQ_GITHUB_USERNAME}"!`,
      [{nom : 'OPEN_PIXEL_ART_PR_NUMBER', valeur : prNumber }]
    );
  } catch (err) {
    helper.fail(
      `Quelque chose s'est mal passé lorsque nous avons essayé de valider votre demande de publication Open Pixel Art !
      
      ${err}`
    );
  }
};
