## Git Logging

## Qu'est-ce qu'un hash de commit ?

Git fonctionne en suivant une série d'instantanés de votre code comme une liste de commits. Cette liste de commit est appelée `git history` d'un dépôt. Afin de retrouver ces instantanés plus tard, on leur attribue à chacun une chaîne longue, aléatoire et unique appelée `commit hash`.

## Historique Git

Vous pouvez voir l'historique git de votre répertoire en exécutant la commande `git log` dans votre terminal. Cela ouvrira une liste de tous les commits de votre dépôt dans le terminal. Vous pouvez `faire défiler cette liste avec les touches fléchées` en commençant par le plus récent et en remontant jusqu'au tout premier commit. Vous pouvez `sortir de cette vue en appuyant sur la touche Q`.

## Réglage fin du journal

Comme vous pouvez l'imaginer, faire défiler chaque commit dans l'historique git serait accablant et pas très efficace. Pour vous aider, `git log` est livré avec [beaucoup d'options](https://git-scm.com/docs/git-log) pour affiner vos résultats de recherche !

## Juste mes commits !

Pour trouver votre pixel commit, nous allons regarder en utilisant le drapeau `--author` !

Une des options de `git log` vous permet de filtrer les commits uniquement par un auteur donné. Exécutez cette commande pour ne voir que vos commits git !

```
git log --author="<%= env.TQ_LOCAL_GIT_USER_NAME.value %>"
```

## Quel est mon hachage ?

Après avoir lancé `git log` avec le drapeau author, vous verrez beaucoup d'informations comme l'auteur, la date et le message du commit. En haut de votre commit, vous verrez une longue chaîne comme `b256b5e67556d331ca6876d137db4f61a1eb031a`. C'est le hash de votre commit !

## Vérifier

Copiez la chaîne de hachage de votre commit dans le champ à droite et cliquez sur `HACK` !
