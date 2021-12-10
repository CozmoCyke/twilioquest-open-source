## Configurer Git

## Comment configurer ?

Le fichier de configuration globale de Git peut être édité en utilisant la commande `git config` dans votre terminal. Il y a beaucoup d'options différentes qui vous permettent de personnaliser git pour votre flux de travail particulier.

Nous n'aurons besoin de définir que deux options pour utiliser `git` avec GitHub dans cette mission. Ces deux paramètres sont notre nom d'utilisateur global et notre email. Les commandes suivantes vont les définir pour nous. Nous utilisons le drapeau `--global` afin d'utiliser le même nom et la même adresse e-mail pour chaque projet `git`.

## Montrez-moi les commandes

Avant d'exécuter cette commande, remplacez `John Doe` par votre nom. Assurez-vous de laisser les guillemets !

```
git config --global user.name "John Doe"
```

Avant d'exécuter cette commande, remplacez `johndoe@example.com` par votre adresse électronique enregistrée sur GitHub.

```
git config --global user.email johndoe@example.com
```

## Vérifiez !

Pour vous assurer que vous avez tout configuré correctement, exécutez la commande suivante :

```
git config --list
```

Vous devriez voir vos `user.name` et `user.email` définis avec les bonnes valeurs !

## Piratez le !

Une fois que vous avez vérifié que git est configuré correctement, appuyez sur `HACK` !
