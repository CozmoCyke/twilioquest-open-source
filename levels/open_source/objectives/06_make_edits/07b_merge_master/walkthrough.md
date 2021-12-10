## Devenir le maître de la fusion

## Qu'est-ce qu'une fusion ?

Lorsque vous avez transféré les commits du répertoire original d'Open Pixel Art dans votre répertoire local, tout s'est bien passé. C'est parce que vous n'avez modifié aucun fichier sur cette branche.

Cependant, vous avez fait des changements sur votre branche de pixels `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` lorsque vous avez livré un nouveau pixel. Il est probable que lorsque vous avez publié les commits du projet Open Pixel Art, quelqu'un d'autre a également ajouté un nouveau pixel. Afin de réconcilier ces changements qui affectent le même code, nous devons passer par un processus de fusion.

Parfois, git peut automatiquement déterminer à quoi devrait ressembler le code fusionné. Si j'édite la première ligne d'un fichier et que vous éditez la 200ème ligne, git est capable de dire que ces deux lignes doivent être intégrées au fichier final. Cependant, si j'édite la 3e ligne et que vous éditez la 5e ligne, les choses se compliquent.

Lorsque des modifications de ce type se produisent et que git ne peut pas déterminer le résultat automatiquement, nous devons l'aider en décidant manuellement quel code doit être intégré au fichier final. Nous appelons cette situation un conflit de fusion.

## Conflit !

Les conflits de fusion peuvent être difficiles à gérer. Si vous demandez aux développeurs ce qu'ils préfèrent le moins dans le travail avec git et le contrôle de version, vous entendrez souvent la réponse "résoudre les conflits de fusion". Nous ne disons pas cela pour vous effrayer, mais pour vous faire savoir que même les développeurs les plus expérimentés ont toujours des problèmes avec ce processus ! Cela peut être véritablement difficile !

Heureusement, puisque vous ne modifiez qu'une seule ligne du fichier `_data/pixels.json`, la résolution des conflits de fusion devrait être plus simple.

La couverture complète de ce sujet pourrait prendre une mission supplémentaire entière ! GitHub propose des [informations plus détaillées sur les conflits de fusion et leurs causes] (https://help.github.com/en/articles/about-merge-conflicts). Il existe également [un guide détaillé sur la manière de résoudre les conflits en ligne de commande] (https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line).

## Comment fusionner ?

Tout d'abord, nous devons retourner à notre branche avec le pixel dessus. Cela nous permettra de retrouver l'ajout de notre pixel dans le fichier `_data/pixels.json` !

``bash
git checkout <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Maintenant, puisque nous n'avons plus le dernier code du master, nous allons lancer le processus de fusion pour fusionner la branche `master` dans notre branche actuelle, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`.

``bash
git merge master
```

Lorsque vous avez exécuté la commande merge, vous avez probablement vu de nombreux messages vous indiquant comment la fusion s'est déroulée. Git vous dira s'il a essayé de fusionner automatiquement des fichiers et s'il y a eu des conflits lors de la tentative de fusion.

Si vous n'avez pas vu de messages `CONFLICT`, alors vous avez de la chance ! Git n'a pas besoin d'aide pour résoudre votre fusion !

Nous pouvons obtenir plus d'informations sur l'état actuel de notre fusion en lançant la commande `git status`. Cela nous donnera beaucoup d'informations.

Elle nous fera savoir que nous devons résoudre manuellement une fusion `You have unmerged paths.` et nous donnera une commande pour abandonner notre fusion `git merge --abort` au cas où nous aurions fait une erreur.

De plus, en bas de cette commande, il y aura une liste des chemins non fusionnés dans lesquels nous devons résoudre les conflits. Si vous venez d'ajouter un pixel, vous verrez quelque chose comme :

``bash
Chemins non fusionnés :
  (utilisez "git add <file>..." pour marquer la résolution)

	tous deux modifiés :   _data/pixels.json
```

(Il est temps de résoudre les conflits !) (https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line)

Une fois que vous avez résolu vos conflits de fusion, vous devez commiter cette résolution pour que git connaisse votre décision finale ! Nous ne mettons pas le `-m` cette fois-ci pour pouvoir utiliser le message de fusion généré automatiquement par git.

## Livrez-le

```
git commit
```

Si vous lancez cette commande et voyez un message comme celui-ci `error : Committing is not possible because you have unmerged files`` alors votre fusion n'est pas encore résolue !

Si vous n'avez pas vu le message ci-dessus, cela signifie que vous êtes dans l'éditeur de texte dans lequel git vous fait écrire votre message comit !

L'outil par défaut que git va ouvrir pour éditer le message de commit est vim. C'est un éditeur de texte en ligne de commande qui peut être déroutant si vous ne l'avez jamais utilisé auparavant. Pour sauvegarder ce message dans vim, nous devons suivre quelques étapes.

1. tapez d'abord la touche `ESC` pour entrer en mode commande
2. tapez `:` pour lancer une commande
3. tapez `w` pour demander à vim d'écrire vos modifications dans le fichier
4. Tapez `q` pour demander à vim de quitter.
5. tapez `ENTER` pour lancer votre commande vim

Si tout a fonctionné correctement, vous devriez être de retour sur le terminal et en dehors de vim !

## Vérifier

Vérifions que tout va bien en lançant `git status` une dernière fois. Nous devrions maintenant voir un message comme `nothing to commit, working tree clean` indiquant que nous sommes tous à jour.

De plus, lançons `git log` pour trouver notre commit de fusion. Votre plus récent commit devrait avoir le message que vous avez entré dans vim pour votre commit. Si vous avez laissé le message généré automatiquement, il ressemblera à quelque chose comme ceci :

``bash
Fusionner la branche 'master' dans <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Une fois que vous avez fusionné master dans votre branche, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, allez-y et appuyez sur `HACK` à droite !
