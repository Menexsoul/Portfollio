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
      "https://image.tmdb.org/t/p/original/lKZmKiSSFgYFM68Bztenl49BwGf.jpg",
  },

  about: {
    sectionSubtitle: "L'IDENTITÉ",
    title: "THOMAS\nDEBROIZE",
    role: "DÉVELOPPEUR FULLSTACK",
    image:
      "https://plus.unsplash.com/premium_photo-1728882427558-ea1bef1ba75b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageLog: "IDENTITY_LOG_01",
    imageLoc: "LOC: 44°24'26.4\"N 8°56'02.4\"E",
    bio: {
      title: "01 / BIO",
      text: "Passionné par le cinéma et la musique, je suis un développeur junior qui essaie de trouver sa place dans le monde du développement web.",
    },
    philosophy: {
      title: "02 / PHILOSOPHIE",
      text: "Comprendre au mieux les besoins de l'utilisateur pour gagner au maximum la satisfaction de celui-ci.",
    },
    legacy: {
      title: "03 / HÉRITAGE",
      items: [
        {
          title: "FRONTEND_CORE",
          desc: "Intégration architecturale de TypeScript, JavaScript et Next.js.",
        },
        {
          title: "BACKEND_SPORE",
          desc: "Infrastructure bio-organique sur Symfony et PHP.",
        },
        {
          title: "DATA_VAULT",
          desc: "Gestion de données avec MariaDB et SQLServer.",
        },
      ],
    },
    contactButton: "INITIER_LE_CONTACT",
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
    sectionSubtitle: "Secteur Compétences",
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
        name: "Node.js",
        /* level: "Avancé", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "GitHub",
        /* level: "Intermédiaire", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
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
      {
        name: "C#",
        /* level: "Intermédiaire", */ image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
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
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thomas-debroize-11061a363/",
    },
    { name: "GitHub", url: "https://github.com/Menexsoul" },
    { name: "Email", url: "mailto:tho.deb.prof@gmail.com" },
  ],
  seo: {
    title: "Thomas Debroize | Portfolio Développeur Web",
    description:
      "Portfolio de Thomas Debroize, développeur web spécialisé en React, Next.js, Symfony et PHP. Découvrez mes projets et compétences.",
    keywords: [
      "Thomas Debroize",
      "thomasdebroize",
      "Portfolio Thomas Debroize",
      "Développeur Web",
      "React",
      "Next.js",
      "Symfony",
      "PHP",
      "Frontend",
      "Fullstack",
      "Dune",
      "Brutalist Design",
    ],
    author: "Thomas Debroize",
    url: "https://votre-portfolio.github.io", // À mettre à jour avec votre URL finale
    ogImage:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    googleVerification: "VOTRE_CODE_DE_VERIFICATION_GOOGLE", // À obtenir sur Google Search Console
  },
};
