const got = require('got');

module.exports = async helper => {
  const { prNumber, repositoryOwner, repository } = helper.validationFields;
  const { TQ_GITHUB_USERNAME } = helper.env;

  if (!repository) {
    helper.fail(
      `N'oubliez pas d'entrer le nom du propriétaire du dépôt auquel vous avez contribué !`
    );
    return;
  }

  if (!repository) {
    helper.fail(
      `N'oubliez pas d'entrer le nom du répertoire auquel vous avez contribué !`
    );
    return;
  }

  if (!prNumber) {
    helper.fail(
      `N'oubliez pas d'indiquer le numéro de la demande de publication à laquelle vous avez contribué !`
    );
    return;
  }

  if (repositoryOwner === 'twilio-labs' && repository === 'open-pixel-art') {
    helper.fail(`Vous ne pouvez plus compter votre contribution à Open Pixel Art !`);
    return;
  }

  try {
    const response = await got(
      `https://api.github.com/repos/${repositoryOwner}/${repository}/pulls/${prNumber}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(
        `Nous n'avons pas trouvé la demande de publication. #${prNumber} sur le  répertoire ${repository} de ${repositoryOwner}!`
      );
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;
    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(
        `Nous avons trouvé la demande de retrait #${prNumber} sur le dépôt "${repository}" de ${repositoryOwner}, mais elle n'appartient pas à votre utilisateur GitHub "${TQ_GITHUB_USERNAME}"`
      );
      return;
    }

    if (isPrClosed && !isPrMerged) {
      helper.fail(
        `Nous avons trouvé la Pull Request #${prNumber} sur le dépôt "${repository}" de ${repositoryOwner}, mais elle a été fermée sans être fusionnée!`
      );
      return;
    }

    if (!isPrMerged) {
      helper.fail(
        `Nous avons trouvé la Pull Request #${prNumber} sur le dépôt "${repository}" de ${repositoryOwner}, mais elle n'a pas encore été fusionnée!`
      );
      return;
    }

    return helper.success(
      `Nous avons trouvé la Pull Request #${prNumber} sur le dépôt  "${repository}" de ${repositoryOwner} et elle a été fusionnée ! Félicitations pour votre contribution open source!`
    );
  } catch (err) {
    helper.fail(
      `Un problème est survenu lorsque nous avons essayé de valider la fusion de votre demande de publication !
      
      ${err}`
    );
  }
};
