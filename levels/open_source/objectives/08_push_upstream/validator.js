const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME, TQ_OPEN_PIXEL_ART_BRANCH } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art/branches/${TQ_OPEN_PIXEL_ART_BRANCH}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode === 200) {
      return helper.success(
        `Nous avons trouvé votre branche "${TQ_OPEN_PIXEL_ART_BRANCH}" sur votre répertoire distant pour l'utilisateur "${TQ_GITHUB_USERNAME}"!`
      ) ;
    } else {
      helper.fail(
        `Nous n'avons pas pu trouver ta branche "${TQ_OPEN_PIXEL_ART_BRANCH}" sur ton dépôt distant "open-pixel-art" pour l'utilisateur "${TQ_GITHUB_USERNAME}"!`
      ) ;
    }
  } catch (err) {
    helper.fail(
      `Quelque chose n'a pas fonctionné lorsque nous avons essayé de valider votre branche Open Pixel Art !
      
      ${err}`
    );
  }
};
