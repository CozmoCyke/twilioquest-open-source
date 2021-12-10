# Ouverture d'une demande de publication

## Demande de publication

Nous avons poussé nos modifications sur GitHub, alors demandons maintenant au projet Open Pixel Art de les publier !

Une demande de mise à jour est un moyen pour d'autres développeurs de demander au propriétaire d'un répertoire d'inclure leurs suggestions de modifications. Nous commençons par spécifier la `base` ou la cible de notre publication. Ensuite, nous choisissons la branche appropriée que nous avons téléchargée pour la `comparer` au répertoire de base.

## Les parties de notre demande de publication

Github maintient une [documentation sur la façon d'utiliser leur interface utilisateur pour ouvrir une demande d'extraction à partir d'un repo forked] (https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).

Nous voulons nous assurer que nous ouvrons une publication sur la branche `master` du projet `open-pixel-art`. Cela signifie que nous devons nous assurer qu'elle est définie comme la base de notre demande de publication.

Votre dépôt forked doit être défini comme le répertoire principal. La branche que vous avez créée, <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>, doit être définie comme la branche de comparaison.

Cette URL devrait vous amener directement à l'écran de création de la demande de publication GitHub avec vos branches `base` et `compare` déjà configurées :

[https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

## Créer une demande de publication

Une fois que vous avez correctement configuré la demande de publication, cliquez sur le gros bouton `Create Pull Request`. Cela ouvrira un formulaire d'édition où vous pourrez spécifier le titre et le message de la Pull Request.

Ce message commence par un message prédéfini que vous pouvez ajuster pour parler du contenu de votre demande de publication. Ce message est créé à l'aide de quelque chose appelé [markdown, dont vous pouvez apprendre davantage ici] (https://guides.github.com/features/mastering-markdown/).

De nombreux répertoires auxquels vous contribuerez à l'avenir disposeront de ces préréglages personnalisés. Le préréglage pour Open Pixel Art comporte une liste d'éléments à vérifier avant l'ouverture.

Nous aurions dû y adhérer lorsque nous avons ajouté notre pixel, mais vérifiez-les maintenant ! Les cases à cocher dans GitHub markdown sont créées avec le code `- [ ]`. Pour les marquer comme cochées, mettez un `x` entre les crochets, de sorte qu'elles ressemblent à ceci : `- [ x ]`.

Une fois que vous avez confirmé la liste de contrôle, cliquez sur le bouton `Create Pull Request` !

## Numéros des Pull Request

Chaque Pull Request ouverte sur GitHub se voit attribuer un numéro afin que vous puissiez la référencer ultérieurement. Vous pouvez trouver ce numéro sur l'écran de la Pull Request à côté du titre de votre Pull Request. Vous pouvez également trouver le même numéro dans l'URL de votre demande de mise à jour.

``bash
https://github.com/twilio-labs/open-pixel-art/pull/<numéro_de_la_demande_pull>
```

Si vous avez perdu votre Pull Request, vous pouvez trouver [toutes les Pull Requests que vous avez ouvertes sur GitHub] (https://github.com/pulls).

## Cliquez sur HACK !

Tapez le numéro de votre Pull Request dans le champ de saisie situé à droite, puis cliquez sur "HACK" pour relever ce défi !
