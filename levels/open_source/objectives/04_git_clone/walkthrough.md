# Clones

## Qu'est-ce que le clonage ?

Une des choses essentielles que git vous permet de faire est de faire une copie locale du code hébergé sur le serveur de quelqu'un d'autre. Le processus de création de cette copie est appelé clonage. Nous allons faire une copie locale du dépôt Open Pixel Art sur GitHub en utilisant la commande `git clone`.

## Comment cloner ?

L'outil de ligne de commande git fournit une commande appelée `clone` pour vous permettre de faire cela. Cette commande vous demande d'obtenir l'URL du dépôt git que vous voulez cloner.

GitHub maintient une [documentation sur la façon d'obtenir l'URL] (https://help.github.com/en/articles/cloning-a-repository) pour un dépôt hébergé par GitHub. Cet article vous accompagne tout au long du processus de clonage, mais nous allons également le parcourir ici.

Depuis GitHub, vous devriez trouver une URL qui commence par `https://` et se termine par `.git`. Cela devrait ressembler à quelque chose comme ceci :

```
https://github.com/twilio-labs/open-pixel-project
```

Une fois que vous avez cette URL, vous allez lancer la commande `git clone` dans votre terminal avec l'URL après comme ceci :

```
git clone https://github.com/twilio-labs/open-pixel-project
```

Maintenant le processus de clonage va commencer !

## Changez de répertoire

Une fois que le répertoire a terminé le clonage, vous pouvez maintenant ouvrir ces nouveaux fichiers. Ils seront une copie exacte des fichiers dans leur état actuel sur GitHub.

Pour valider que le clonage a fonctionné correctement, nous allons avoir besoin du chemin d'accès complet de notre projet nouvellement cloné. Tapez la commande suivante de changement de répertoire, `cd`, pour entrer dans votre nouveau répertoire.

```
cd open-pixel-art
```

Si vous lancez la commande list, `ls` (ou `dir` sous Windows), vous devriez maintenant voir une liste de noms de fichiers comme `package.json` et `README.md`.

```
ls
```

## Répertoire de travail actuel

Maintenant que nous avons notre répertoire nouvellement cloné ouvert dans notre terminal, nous avons besoin d'obtenir son chemin. Nous pouvons exécuter la commande present working directory, `pwd`, pour déterminer ce chemin.

```
pwd
```

Si vous ouvrez ce répertoire dans votre explorateur de fichiers ou dans l'éditeur de texte de votre choix, vous pourrez également voir votre clone du répertoire Open Pixel Art.

## Validez !

Copiez le chemin d'accès à votre répertoire cloné que vous avez obtenu avec la commande `pwd`. Collez ce chemin de fichier dans le champ à droite et appuyez sur `HACK` !
