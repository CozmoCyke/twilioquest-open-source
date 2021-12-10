## Il est temps de fusionner !

## Qu'est-ce qu'une fusion ?

Une fusion est un terme git pour remettre deux branches ensemble. Lorsque vous avez forké le dépôt précédemment et créé une nouvelle branche, vous avez créé une version alternative de l'historique avec du nouveau code. Le processus de fusion recolle cette histoire au projet principal pour que tout le monde puisse bénéficier de votre code.

## Collaboration !

Lorsque vous ouvrez une demande de publication pour un projet open source, vous collaborez avec les mainteneurs de ce projet pour que votre code soit fusionné.

Pour le projet Open Pixel Art, nous n'avons pas besoin de parler à qui que ce soit ! Nous disposons de quelques outils qui vont automatiquement vérifier que votre demande de publication est valide et la fusionner.

## Fusionner les conflits

Parfois, GitHub vous indiquera que vous avez rencontré un conflit de fusion et que votre code ne peut pas être fusionné automatiquement. Cela signifie que vous devez aider git à déterminer à quoi le code final doit ressembler.

Cela peut être causé par de nombreuses choses, l'une d'entre elles étant que deux développeurs différents ont modifié la même ligne de code en même temps.

[GitHub dispose d'informations sur la résolution des conflits de fusion mises à jour] (https://help.github.com/en/articles/about-merge-conflicts). Parfois, ce problème peut être résolu dans l'éditeur en ligne, parfois il faut pousser un nouveau commit.

## Comment puis-je savoir quand ma demande de publication a été fusionnée ?

Lorsque vous collaborez avec les responsables d'un projet, vous devez leur laisser le temps de vous répondre. Une fois que vous avez eu votre conversation et apporté vos modifications au code, les responsables décideront de terminer la fusion !

Vous recevrez des notifications de GitHub [en fonction de vos paramètres] (https://help.github.com/en/articles/about-notifications) qui vous indiqueront quand votre code sera fusionné.

Puisque nos outils passeront automatiquement en revue [votre Pull Request](https://github.com/twilio-labs/open-pixel-art/pull/<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>), vous devriez être en mesure de revenir à cette Pull Request dans quelques minutes pour une Pull Request fusionnée !

## Hack !

Une fois que [votre Pull Request](https://github.com/twilio-labs/open-pixel-art/pull/<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>) a été fusionnée avec succès, cliquez sur `HACK` pour que TwilioQuest puisse la confirmer pour vous !
