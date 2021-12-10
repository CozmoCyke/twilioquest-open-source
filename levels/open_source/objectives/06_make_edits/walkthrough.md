# Pixel Time

Maintenant que nous avons copié notre projet localement et créé une branche de développement, nous sommes prêts à apporter notre contribution. Mais avant cela, nous devons définir le projet et le faire fonctionner ! De cette façon, nous pouvons vérifier nos changements sur notre propre ordinateur avant de les pousser vers GitHub pour que tout le monde puisse les voir.

## Node.js et NPM

Le projet Open Pixel Art est construit au dessus de Node.js et utilisera également `npm`. Cet objectif suppose que vous comprenez le fonctionnement de `npm` et que vous l'avez installé.

Si vous n'êtes pas familier avec ces outils, suivez ce [guide d'installation de Node.js] (https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/). Après avoir installé Node.js, vous devriez être capable de copier et coller les commandes `npm` dans cet objectif.

## Installer les dépendances du projet

Maintenant que vous avez installé Node.js et `npm`, dans le dossier principal de votre projet Open Pixel Art, exécutez la commande suivante :

```
npm install
```

Ceci téléchargera sur votre ordinateur toutes les dépendances du code dont ce projet a besoin pour fonctionner. Vous devriez maintenant voir des messages d'état pendant l'installation des dépendances.

Ce processus peut prendre un certain temps !

## Démarrez-le

Maintenant que notre projet est installé et configuré, nous allons le démarrer localement. Exécutez la commande suivante dans le répertoire racine de votre dépôt :

```
npm start
```

Cela va démarrer un serveur web local sur votre ordinateur qui exécute votre version personnelle du projet Open Pixel. Dans le terminal, après que le serveur ait démarré, vous devriez afficher une URL qui sera généralement :

``url
http://localhost:8080
```

Ouvrez cette page dans votre navigateur web pour voir votre propre page locale du projet Open Pixel Art en direct !

## Pixels.json

Maintenant que nous pouvons voir nos pixels localement, apprenons à les modifier ! Ouvrez le projet Open Pixel Art dans un éditeur de texte de votre choix ! Maintenant, ouvrez le fichier situé à `_data/pixels.json`.

A l'intérieur de ce fichier, vous trouverez un tableau JSON d'objets de pixels qui ressemblent à ceci :

```diff
{
  "données" : [
    { "y" : 1, "x" : 1, "color" : "#F22F46", " username " : "<UNCLAIMED>" },
    { "y" : 1, "x" : 2, "color" : "#F22F46", "username" : " <UNCLAIMED>" },
    { "y" : 1, "x" : 3, "color" : "#F22F46", "username" : "<UNCLAIMED>" },
    ...
  ]
}
```

## Propriétés de l'objet pixel

- `x` : La coordonnée x de votre pixel. 0 est la colonne de pixels la plus à gauche
- `y` : La coordonnée y de votre pixel. 0 est la rangée de pixels la plus basse
- `color` : La couleur que doit avoir votre pixel sous forme de code hexadécimal (par exemple #ff0000 pour le rouge)
- `username` : Le nom d'utilisateur GitHub que vous utiliserez pour créer la demande de publication.

Créez une nouvelle ligne dans le fichier `_data/pixels.json` qui ressemble à quelque chose comme ceci :

```diff
{
  "données" : [
+ { "y" : 1, "x" : 2, "color" : "#FFFF00", "nom d'utilisateur" : "cedric" },
    { "y" : 1, "x" : 3, "couleur" : "#F22F46", "nom d'utilisateur" : "<UNCLAIMED>" },
    ...
  ]
}
```

Vous devriez maintenant voir votre nouveau pixel sur votre URL hébergée localement !

## Gardez-le trié !

Assurez-vous que le pixel ajouté dans le fichier `_data/pixels.json` est trié. Il devrait commencer par `y` et ensuite `x`. Nous avons également ajouté une tâche npm que vous pouvez exécuter pour faire ce tri pour vous !

``bash
npm run sort:open-pixels
```

Après avoir ajouté votre nouveau pixel, exécutez ceci dans votre terminal pour re-trier le fichier pixels !

## Vérifiez que tout fonctionne toujours !

Nous allons lancer une dernière commande `npm` avant de terminer nos modifications. Cette commande s'appelle `npm test`. La plupart des projets open source ont une suite de tests automatiques. Cela vous permet de vous assurer que vous n'avez rien fait pour casser le projet avec vos changements !

Ouvrez un nouvel onglet ou une nouvelle fenêtre de Terminal et exécutez la commande suivante :

```
npm test
```

Vous ne devriez pas voir que les tests ont échoué, ils devraient tous dire `passed`. Cela signifie que tout fonctionne toujours !

## Comment puis-je confirmer ma modification ?

Vous avez finalement ajouté un pixel au canvas et confirmé que vous n'avez rien cassé !

Maintenant, nous devons faire savoir à `git` que nous sommes satisfaits de nos changements. Nous faisons cela en créant quelque chose appelé un `commit`. Un commit est un instantané de votre base de code capturé dans le temps.

## Comment faire un commit ?

La première étape est d'ajouter les fichiers que vous voulez commiter. Vous n'avez besoin d'ajouter que les fichiers que vous voulez modifier, donc pour ce commit nous n'ajouterons que notre fichier `_data/pixels.json` mis à jour.

```
git add _data/pixels.json
```

Pour vérifier que vous avez ajouté les bons fichiers, vous pouvez exécuter la commande suivante :

```
git status
```

Cette commande vous montrera en vert les fichiers qui sont sur le point d'être commités. Le fichier `_data/pixels.json` devrait être le seul à être listé !

Maintenant, nous devons utiliser la commande `git commit` pour finaliser nos changements. Nous ajoutons également un drapeau `-m` à cette commande afin de pouvoir ajouter un message qui accompagne notre commit.

La partie `feat(pixels):` qui précède notre message est ajoutée pour que le projet Open Pixel Art puisse analyser de manière programmatique les messages de commit. Vous pouvez en apprendre plus à ce sujet en consultant le [Conventional Commits Standard] (https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

```
git commit -m "feat(pixels) : add my new pixel" (feat(pixels) : ajouter mon nouveau pixel)
```

## Piratez !

Cet objectif avait beaucoup d'étapes ! Mais maintenant vous avez un nouveau pixel committé et vous êtes prêt à le partager avec le monde. Appuyez sur `HACK` pour confirmer que votre pixel a été modifié et validé correctement.
