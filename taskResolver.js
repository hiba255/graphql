let tasks = [
  {
    id: "1",
    title: "Développement Front-end pour Site E-commerce",
    description:
      "Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.",
    completed: false,
    duration: 0,
  },
  {
    id: "2",
    title: "Développement Back-end pour Authentification Utilisateur",
    description:
      "Implémenter un système d'authentification et d'autorisation pour une application web en utilisant Node.js, Express, et Passport.js",
    completed: false,
    duration: 0,
  },
  {
    id: "3",
    title: "Tests et Assurance Qualité pour Application Web",
    description:
      "Développer et exécuter des plans de test et des cas de test complets.",
    completed: false,
    duration: 0,
  },
];

const taskResolver = {
  Query: {
    task: (_, { id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
  },

  Mutation: {
    addTask: (_, { title, description, completed = false, duration = 0 }) => {
      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };

      tasks.push(task);
      return task;
    },

    completeTask: (_, { id }) => {
      const task = tasks.find(task => task.id === id);

      if (!task) return null;

      task.completed = true;
      return task;
    },

    changeDescription: (_, { id, description }) => {
      const task = tasks.find(task => task.id === id);

      if (!task) return null;

      task.description = description;
      return task;
    },

    deleteTask: (_, { id }) => {
      const index = tasks.findIndex(task => task.id === id);

      if (index === -1) return null;

      const [deletedTask] = tasks.splice(index, 1);
      return deletedTask;
    },
  },
};

module.exports = taskResolver;