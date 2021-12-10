const got = require('got');

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_PR_NUMBER } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/pulls/${TQ_OPEN_PIXEL_ART_PR_NUMBER}`,
      // `https://api.github.com/repos/sindresorhus/got/pulls/889`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(
        `Nous n'avons pas trouvé la Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} sur le dépôt distant d'Open Pixel Art"!`
        ) ;
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;

    if (isPrClosed && !isPrMerged) {
      helper.fail(
        `Nous avons trouvé la Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} sur le dépôt distant Open Pixel Art, mais elle a été fermée sans être fusionnée!`
      ) ;
      return ;
    }

    if (!isPrMerged) {
      helper.fail(
        `Nous avons trouvé la Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} sur le dépôt distant Open Pixel Art, mais elle n'a pas encore été fusionnée!`
      ) ;
      return ;
    }

    return helper.success(
      `Nous avons trouvé la Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} sur le dépôt distant Open Pixel Art et elle a été fusionnée ! Félicitations pour votre contribution open source!`
    ) ;
  } catch (err) {
    helper.fail(
      `Quelque chose n'a pas fonctionné lorsque nous avons essayé de valider la fusion de votre demande de publication Open Pixel Art !
      
      ${err}`
    );
  }
};
