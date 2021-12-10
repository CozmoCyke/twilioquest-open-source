const got = require("got");

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase: false });

  if (!username) {
    return helper.fail(`Veuillez entrer le nom d'utilisateur de votre compte GitHub !`);
  }

  try {
    const response = await got(`https://api.github.com/users/${username}`, {
      throwHttpErrors: false,
    });

    if (response.statusCode === 200) {
      return helper.success(
        `Nous avons trouvé votre utilisateur GitHub, ${username}. Bon travail !`,
        [{ name: "GITHUB_USERNAME", value: username }]
      );
    } else {
      helper.fail(
        `Nous n'avons pas trouvé l'utilisateur GitHub, ${username}. Y a-t-il une faute de frappe dans le nom d'utilisateur ?`
      );
    }
  } catch (err) {
    helper.fail(
      `Un problème est survenu lorsque nous avons essayé de valider votre nom d'utilisateur GitHub !
      
      ${err}`
    );
  }
};
