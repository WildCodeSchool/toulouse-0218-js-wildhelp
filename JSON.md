# Le format JSON

## C'est quoi ?

JSON est un format très lié à JavaScript puisqu'il signifie JavaScript Object Notation.

Il est fait pour l'échange et le stockage de données manipulées - entre autres - par un programme JavaScript.

On peut s'en servir côté Node.js, côté navigateur, et souvent, pour communiquer entre les deux !

Le JSON est une **représentation** sous forme d'une chaîne de caractères, d'un *object* ou d'un *tableau* JS.

Si j'ai un objet JS :

```javascript
const joe = {
  name: 'Joe', age: 25
}
```

Je pourrais le convertir dans le JSON suivant :

```json
{"name":"Joe","age":25}
```

Cela paraît presque la même chose, et c'est en apparence très proche. Mais alors que `joe` ci-dessus est un *objet*, le JSON équivalent est une *chaîne*.

## A quoi ça sert ?

Eh bien, notamment à communiquer entre un client et un serveur. L'application serveur peut récupérer par exemple des données dans une base de données, et les convertir en une chaîne JSON, et les envoyer sous cette forme au client (navigateur web).

Le client reconstruit des objets ou tableaux à partir du JSON.

Voici un exemple d'URL d'une API qui fournit du JSON : https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/10.json. Visite ce lien pour voir !

**Attention, ce lien n'est qu'une URL** parmi toutes celles de l'API qui vous est donnée pour le hackathon. En voici le **sommaire** : https://akabab.github.io/superhero-api/api/

Mieux, ouvre les outils développeurs, va dans l'onglet Réseau / Network, et jongle entre les sous-onglets "preview" et "response", pour voir ce que le serveur a répondu à cette requête.

* Response donne la réponse "brute" : c'est du texte, une chaîne de caractères
* Preview donne la réponse *interprétée*, c'est à dire, l'objet ou tableau JavaScript recréé à partir du JSON

![Preview du retour d'une requête](https://github.com/bhubr/hero/blob/master/request-chrome-dev-tools.png)


