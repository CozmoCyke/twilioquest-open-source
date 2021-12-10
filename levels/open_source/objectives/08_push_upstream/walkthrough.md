# Pousser en amont

## Local contre distant

Les dépôts Git sont de deux sortes, selon l'endroit où ils se trouvent. La version que vous avez clonée sur votre propre ordinateur est appelée un répertoire `local`. La version originale sur GitHub et la copie que vous avez forgée sont appelées des dépôts `distants`.

Pour l'instant, votre nouvelle modification de pixel ne se trouve que sur votre ordinateur, dans un dépôt local. Afin de la partager avec le monde entier, vous devez l'envoyer en amont vers un dépôt distant.

Nous allons faire cela avec la commande `git push`. Nous devons ajouter quelques arguments et drapeaux à cette commande avant de l'exécuter.

## En amont

Le processus d'envoi de modifications locales à un dépôt distant est appelé push upstream dans git. "Upstream" est un terme qui fait référence à la branche distante du même nom que celle sur laquelle vous travaillez localement.

Lorsque vous avez créé votre branche plus tôt avec la commande `git branch`, vous l'avez seulement créée localement. Nous devons utiliser le drapeau `--set-upstream` lorsque nous poussons afin de créer votre branche sur le répertoire distant également.

Notre commande ressemble maintenant à :

``bash
git push --set-upstream
```

## Où est upstream ? A l'origine !

Le drapeau `--set-upstream` est la première partie de notre puzzle ! Cependant, upstream ne sait pas encore où trouver notre dépôt distant. Exécutez la commande suivante dans votre terminal :

``bash
git remote -v
```

Vous verrez quelques lignes qui ressemblent à ceci :

``bash
origin https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

Vous pouvez reconnaître ces URLs comme étant les mêmes que celles que vous avez clonées pour créer votre copie locale originale de votre fork Open Pixel Art. C'est parce que `git` a lié notre Fork distant pour nous.

A gauche de ces URLs, vous verrez le mot `origin`. C'est le nom par défaut que git assigne à votre premier répertoire distant lié lorsque vous faites un clone initial de git.

Pour spécifier que nous voulons pousser en amont vers notre répertoire distant `origin`, nous devons l'ajouter comme paramètre après le drapeau `--set-upstream`.

Notre commande ressemble maintenant à ceci :

``bash
git push --set-upstream origin
```

## Comment on l'appelle ?

La dernière chose que git doit savoir sur la façon dont nous poussons notre branche locale vers notre dépôt distant est le nom de la branche. Nous voulons que notre nouvelle branche distante porte le même nom que notre branche locale.

Passez le nom de la branche locale sur laquelle vous avez travaillé comme paramètre final de la commande `git push`.

Votre commande finale devrait ressembler à ceci :

``bash
git push --set-upstream origin <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Allez-y et exécutez-le ! Vous serez invité à entrer votre nom d'utilisateur et votre mot de passe GitHub, puis tout devrait être téléchargé sur GitHub.

## Vérifier

Vérifiez sur votre dépôt GitHub pour vous assurer que votre branche y est maintenant.

L'url de votre nouvelle branche devrait ressembler à ce qui suit :

[https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

Vous pouvez également naviguer vers cette vue en utilisant l'interface utilisateur de GitHub, il n'y a pas besoin de mémoriser les URLs.

## Hack !

Une fois que vous avez poussé votre branche locale vers votre Fork distant, allez-y et appuyez sur `HACK` !
