// Remplacez la chaîne ci-dessous par le message codé du tutoriel !
// Si vous avez oublié de le copier, c'est "S2V2aW4gaXMgYXdlc29tZQ==".
const ENCODED_MESSAGE = 'replace me!' ;

// Ensuite, utilisez la science secrète des singes pour décoder le message codé.
const decodedMessage = Buffer.from(ENCODED_MESSAGE, 'base64').toString('ascii') ;

// Affichez le message décodé sur la console !
console.log('Voici le message décodé - collez-le dans le champ de texte:') ;
console.log(decodedMessage) ;
