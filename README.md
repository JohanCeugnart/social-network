# Documentation du projet
18 10 2021
## Présentation

Projet réalisé par Louis Allard et Johan Ceugnart.

http://wwww.louisallard.fr

https://johan-ceugnart.fr/

L'objectif est de réaliser un réseau social  tout en se challengeant sur une technologie ignoré a la base : le NextJS

### Stack

- NextJS
- JavaScript
- SCSS

## Maquette

https://xd.adobe.com/view/ab12a5c1-ebf1-4766-963f-7ef8ee62d81b-fe41/screen/38680705-37e2-4034-99fd-3bc02735d4fb/

## Organisation du travail

Backlog sous forme de backlog dans le gitproject

## Regles 

#### Arbre

```
social-network
├─ HOWTODOC.md
├─ README.md
├─ _README.md
├─ package.json
├─ pages
│  ├─ _app.js
│  ├─ api
│  │  └─ hello.js
│  └─ index.js
├─ public
│  ├─ favicon.ico
│  └─ vercel.svg
└─ styles
   ├─ Home.module.css
   └─ globals.css

```

#### Pages

nom des pages: camelCase

#### Code

- Utilisation du module Prettier pour l'indentation
- Variables js et scss: camelCase
- variables en anglais
- SCSS: Toutes les couleurs doivent etre mise dans des variables
- Nom de fonctions: camelCase
- Le code doit etre commentés
- nom des composants: PascalCase (obligation de NextJS)

#### Git

- nom de branches en anglais et en CamelCase
- Commit en anglais. Commencent avec une majuscule et se termine par un point
- Les PR vers la branche principale doivent etre faites par l'autre partie
- Les merges doivent vers la branche pincipales doivent etre fait par l'autre partie

#### Gestionnaire de package utilisé

npm