// Ce fichier contient tous les textes et liens de votre portfolio.
// Vous pouvez modifier les valeurs ici pour mettre à jour le site entier.

export const portfolioContent = {
  hero: {
    // Le grand titre principal (lettre par lettre)
    title: "Thomas",
    // Le sous-titre sous le grand titre
    subtitle: "Devellopeur Fullstack",
    // Image de fond (parallaxe)
    backgroundImage:
      "https://www.fond-ecran-hd.net/Public/uploads/2023-05-25/dunepartie23840x2160film.jpg",
  },

  projects: {
    sectionTitle: "Mes\nProjets",
    sectionDescription:
      "Selection de projets professionnels et personnels, témoins de mon parcours dans le développement web.",
    items: [
      {
        id: 1,
        title: "Module de Table pour Quill",
        category:
          "Travail de reverse engineering / refactoring sur un projet open source",
        image:
          "https://github.com/user-attachments/assets/c5304bab-84bd-4a60-b4ec-6a941a7d0c11",
        link: "https://github.com/wobal/quill-table-better",
      },
      {
        id: 2,
        title: "Nuit de l'Info 2025",
        category: "Défi Étudiant",
        image: "https://www.nuitdelinfo.com/img/logo-n2i-2025.png",
        link: "https://github.com/Menexsoul/UI-de-l-info",
      },
      {
        id: 3,
        title:
          "Réseau social basé sur la pop Asiatique/site de notation de musique",
        category: "Projet Etudiant",
        image: "https://www.corenov.ca/wp-content/uploads/2020/09/a-venir.jpg",
        link: "https://github.com/Trifarixx/K-Swap ",
      },
      {
        id: 4,
        title: "Projet Perso à venir",
        category: "EN RECHERCHE D'IDÉES",
        image: "https://www.corenov.ca/wp-content/uploads/2020/09/a-venir.jpg",
        link: "#",
      },
    ],
  },

  skills: {
    sectionTitle: "L'Arsenal",
    sectionSubtitle: "Secteur 04",
    description1:
      "Maîtrise des outils de création numérique. Chaque technologie est une arme affûtée pour sculpter l'information brute.",
    description2:
      "La forme suit la fonction avec une brutalité assumée, rappelant les monolithes de Caladan et les étendues arides d'Arrakis.",
    quote: "La peur tue l'esprit. L'interface doit être maîtrisée.",
    backgroundImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    // Liste des compétences (vous pouvez changer les noms et les images)
    // Pour utiliser vos propres images, placez-les dans le dossier "public" et utilisez le chemin absolu (ex: "/mon-logo-js.png")
    items: [
      {
        name: "JavaScript",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "SASS",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "Next.js",
        /* level: "Intermédiaire", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Symfony",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
      },
      {
        name: "PHP",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "HTML/CSS",
        /* level: "Expert", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "Tailwind",
        /* level: "Expert", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  contact: {
    sectionTitle: "La\nTransmission",
    sectionSubtitle:
      "Un message pour moi ? Utilisez ce formulaire pour initier la communication. Je suis toujours à l'écoute de nouvelles opportunités et collaborations.",
    formLabels: {
      name: "Identification",
      namePlaceholder: "SUJET NOM",
      email: "Coordonnées",
      emailPlaceholder: "CANAL@ORBITE.COM",
      message: "Message à transmettre",
      messagePlaceholder: "ENCODEZ VOTRE MESSAGE ICI...",
      submit: "Initier la transmission",
    },
    footer: {
      copyright: "Thomas Debroize",
      location: "Etudiant en BTS SIO au Lycée Fulbert, Chartres",
    },
  },
};
