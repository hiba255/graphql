#  GraphQL - API de gestion de tâches

API GraphQL simple pour gérer des tâches avec Node.js, Express et Apollo Server.

Les données sont stockées en mémoire (tableau JavaScript), donc elles sont réinitialisées à chaque redémarrage du serveur.

---

#  Fonctionnalités
- Ajouter une tâche
- Récupérer toutes les tâches
- Récupérer une tâche par ID
- Marquer une tâche comme terminée
- Modifier la description d’une tâche
- Supprimer une tâche
- Gestion optionnelle de la durée

---

#  Technologies utilisées
- Node.js
- Express.js
- GraphQL
- Apollo Server
- @graphql-tools/schema

---

# Installation
npm install

node -v  
npm -v

---

#  Lancer le projet
node index.js

http://localhost:5000/graphql

---

#  Structure du projet
graphql/
├──captures
├──node_modules
├──README.md
├── index.js
├── taskSchema.gql
├── taskSchema.js
├── taskResolver.js
└── package.json

---

#  Schéma GraphQL

type Task {
  id: ID!
  title: String!
  description: String!
  completed: Boolean!
  duration: Int
}

type Query {
  task(id: ID!): Task
  tasks: [Task]
}

type Mutation {
  addTask(title: String!, description: String!, completed: Boolean!, duration: Int): Task
  completeTask(id: ID!): Task
  changeDescription(id: ID!, description: String!): Task
  deleteTask(id: ID!): Task
}

---

#  Exemples de requêtes

query {
  tasks {
    id
    title
    completed
  }
}

mutation {
  addTask(title: "Nouvelle tâche", description: "Tester GraphQL", completed: false, duration: 2) {
    id
    title
  }
}

mutation {
  completeTask(id: "1") {
    id
    completed
  }
}

mutation {
  changeDescription(id: "1", description: "Texte mis à jour") {
    id
    description
  }
}

mutation {
  deleteTask(id: "2") {
    id
    title
  }
}

---

#  Remarques
- Données stockées en mémoire uniquement
- Perte des données au redémarrage
- IDs générés manuellement
- Projet pédagogique

---


Comprendre GraphQL, schéma, résolveurs, queries et mutations dans une API Node.js.
