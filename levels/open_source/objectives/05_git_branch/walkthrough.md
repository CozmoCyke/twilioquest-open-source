# Branchements

Les branches sont comme une version alternative de l'historique. Lorsque vous créez une nouvelle branche, son code sera identique à votre ancien code. Cependant, une fois que vous avez effectué un changement, seule la nouvelle branche se souviendra de ce changement.

Cela signifie que vous disposez d'un endroit sûr pour tester les changements de code sans craindre qu'ils ne cassent votre code pour toujours. Vous pouvez avoir autant de branches différentes que vous le souhaitez, mais nous n'allons créer qu'une seule nouvelle branche pour cet objectif.

## Comment créer une nouvelle branche ?

Utilisez la commande `git branch` pour créer une nouvelle branche dans un répertoire git. Un exemple de commande est montré ci-dessous. remplacez `<BRANCH_NAME>` par le nom de la branche que vous voulez créer.

C'est généralement une bonne idée de nommer votre branche avec un nom qui vous indique les changements à l'intérieur de cette branche. Dans cette mission, nous allons créer un nouveau pixel, c'est donc une bonne idée de nommer votre branche comme `new-pixel`.

```
git branch <BRANCH_NAME>
```

Maintenant que vous avez créé une nouvelle branche, affichons la liste de toutes les branches de ce répertoire pour nous assurer que vous l'avez fait correctement.

```
git branch
```

Ceci devrait afficher une liste sur votre terminal qui inclut le nom de votre nouvelle branche. Vous remarquerez également une autre branche nommée `master`.

## Alors, qu'est-ce que master ?

Chaque répertoire git doit avoir au moins une branche. Par convention, cette branche par défaut est généralement appelée `master`. Il s'agit souvent de la version la plus courante et la plus stable d'un projet. Les nouvelles fonctionnalités sont développées dans des branches comme celle que nous venons de créer et ensuite fusionnées dans master.

Dans la liste des branches, vous remarquerez que master est accompagné d'un astérisque `*`. Cela signifie que vous êtes en train d'effectuer des modifications sur la branche `master`. git utilise l'expression "checked out" pour décrire la branche que vous avez sélectionnée.

## Comment utiliser la nouvelle branche ?

Maintenant que vous savez que vous êtes sur la branche `master` et non sur votre nouvelle branche, nous devrions vérifier notre nouvelle branche.

Git fournit la commande `checkout` pour vous permettre de passer d'une branche à l'autre. Utilisez la commande suivante avec le remplacement de `<BRANCH_NAME>` pour passer à votre nouvelle branche.

```
git checkout <BRANCH_NAME>``
```

Si vous voulez revenir à master (ou toute autre branche) dans le futur, lancez `git checkout` avec un nom de branche différent.

```
git checkout master
```

## Vérifiez mon travail !

Maintenant, vous devriez avoir créé votre nouvelle branche et l'avoir vérifiée. Nous allons faire des changements de code sur cette branche dans le prochain objectif ! Pour l'instant, tapez le nom de votre branche dans le champ à droite et cliquez sur `HACK` !
