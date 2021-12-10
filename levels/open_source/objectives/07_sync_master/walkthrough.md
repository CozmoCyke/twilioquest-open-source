## Synchroniser un Fork

## Git est un système distribué

Un aspect important de git est qu'il est distribué, et être distribué signifie largement qu'il n'y a pas d'"amont" ou d'"aval" inhérent au système.

Chaque dépôt contient un même historique git et des instantanés de votre code. Ceci étant dit, il existe certaines conventions de nommage que la communauté open source utilise pour aider à garder la trace des choses. Gardez à l'esprit qu'elles ne sont pas intrinsèquement spéciales !

## Local vs distant

La première classification utile des dépôts est `local` par opposition à `distant`. La version que vous avez clonée sur votre propre ordinateur est appelée un répertoire `local`. La version originale sur GitHub et la copie que vous avez forgée sont appelées des dépôts `distants`.

Vos modifications seront conservées dans votre répertoire local jusqu'à ce que vous les repoussiez vers votre Fork. Une complication du travail sur un projet open source est que les autres développeurs poussent leurs propres changements aussi !

### Comment puis-je obtenir leurs modifications ?

Pendant que vous travaillez ici, il y a une chance que de nouveaux changements aient été téléchargés sur GitHub que vous n'avez pas localement ! Lorsque nous avons cloné notre fork Open Pixel Art sur cet ordinateur, nous l'avons lié comme un répertoire distant.

Vous pouvez voir tous les dépôts liés en utilisant la commande `git remote`. L'ajout de la commande `-v` donne plus d'informations sur le distant, comme l'URL du dépôt git auquel il est lié.

```bash
git remote -v
```

Lorsque vous lancez `git remote`, vous verrez quelques lignes qui ressemblent à ceci :

``bash
origin https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

Cependant, les autres développeurs n'apporteront pas de modifications à votre Fork, ils modifieront l'original. Nous devons ajouter un autre répertoire distant. Par convention, nous l'appellerons `upstream`.

## Comment ajouter le dépôt distant upstream ?

Tout d'abord, vous aurez besoin de l'URL du dépôt git du [projet original Open Pixel Art](https://github.com/twilio-labs/open-pixel-art). Elle sera très similaire à l'URL du navigateur et se terminera par `.git`. Vous obtiendrez cette URL de la même manière que lorsque vous avez [cloné ce dépôt à partir de la documentation GitHub](https://help.github.com/en/articles/cloning-a-repository).

L'URL devrait ressembler à ceci, mais sera différente pour tout autre dépôt que vous utiliserez à l'avenir :

``bash
https://github.com/twilio-labs/open-pixel-art.git
```

Maintenant, nous allons utiliser la fonctionnalité `add` de `git distant`. La commande que nous voulons lancer ressemble à ceci :

``bash
git remote add upstream https://github.com/twilio-labs/open-pixel-art.git
```

`git remote add` est la commande que nous exécutons, `upstream` est le nom du distant que nous créons, et `https://github.com/twilio-labs/open-pixel-art.git` provient du dépôt du projet Open Pixel Art sur GitHub.

Exécutons `git remote -v` une fois de plus pour vérifier que nous avons créé `upstream` correctement. Il devrait montrer à la fois `origin` et `upstream` maintenant.

``bash
origin https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
upstream https://github.com/twilio-labs/open-pixel-art.git (fetch)
upstream https://github.com/twilio-labs/open-pixel-art.git (push)
```

## Synchronisons notre Fork avec le distant.

Il n'y a pas de fonctionnalité dans GitHub pour synchroniser directement deux dépôts distants.

1. Au lieu de cela, nous allons tirer le code sur la branche `master` du dépôt original Open Pixel Art en local.
2. Ensuite, nous le fusionnons avec la branche `master` de notre dépôt local.
3. Enfin, nous allons pousser la branche `master` mise à jour vers notre Fork.

Ainsi, nos trois dépôts seront synchronisés.

**1.** Tout d'abord, nous devons passer à notre branche principale :

``bash
git checkout master
```

Le passage à la branche master remettra notre code dans l'état où il était lorsque nous l'avons cloné. Si vous vérifiez le fichier `_data/pixels.json`, vous ne verrez plus votre pixel ajouté.

Ne vous inquiétez pas ! Si vous retournez dans votre branche, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` vos modifications sont toujours là, saines et sauves.

**2.** Maintenant, nous utilisons la commande `git pull` pour obtenir le code de notre dépôt `upstream` récemment configuré. Nous devons spécifier la branche `master` pour la publication.

``bash
git pull upstream master
```

**3.** Après avoir lancé la commande pull, vous devriez voir un message détaillant toutes les différences de code entre votre `master` local et le `master` de `open-pixel-art`. Il peut s'agir d'une tonne de fichiers ou vous pouvez recevoir un message indiquant que vous êtes déjà à jour !

Si vous avez reçu des changements, vous devez les repousser vers votre Fork. Vous pouvez le faire en lançant la commande git push.

``bash
git push
```

Ceci va pousser vos changements locaux sur la branche `master` vers la branche `master` de votre Fork. Maintenant l'historique git de notre fork pour master, notre master local, et la branche master de open-pixel-art sont tous synchronisés !

## Vérifier

Vous pouvez voir la liste des derniers commits sur chaque dépôt en visitant ces URLs. Assurez-vous de rafraîchir pour vous assurer que le dernier commit est le même sur votre Fork et sur le répertoire original.

Il y a une chance que de nouveaux commits soient apparus depuis que vous avez fait votre dernière synchronisation ! Ceci est particulièrement fréquent sur ce dépôt d'apprentissage où les Pull Requests sont automatiquement approuvées et fusionnées !

[https://github.com/twilio-labs/open-pixel-art/commits/master](https://github.com/twilio-labs/open-pixel-art/commits/master)

[https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master](https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master)

Une fois que vous avez synchronisé les branches maîtresses des trois dépôts, allez-y et appuyez sur `HACK` à droite !
