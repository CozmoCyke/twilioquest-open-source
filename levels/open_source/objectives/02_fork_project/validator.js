const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode === 200) {
      return helper.success(
        `Nous avons trouvé votre fork du repo Open Pixel Art ! Bon travail !`
      );
    } else {
      helper.fail(
        `Nous n'avons pas trouvé de repo nommé "open-pixel-art" appartenant à l'utilisateur GitHub, ${TQ_GITHUB_USERNAME}. Is your fork named correctly?`
      );
    }
  } catch (err) {
    helper.fail(
      `Quelque chose a mal tourné lorsque nous avons essayé de valider votre fork Open Pixel Art !
      
      ${err}`
    );
  }
};
