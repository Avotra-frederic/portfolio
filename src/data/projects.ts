import type { CodeSample, Project } from "../types/project";

const exampleSamples: Record<string, CodeSample> = {
  "category-api": {
    language: "http",
    code: "GET /api/v1/categories\nAccept: application/json",
    caption: "Exemple de requête vers la route des catégories documentée dans ce projet.",
  },
  "python-automation": {
    language: "python",
    code: `from openpyxl import Workbook

workbook = Workbook()
sheet = workbook.active
sheet.append(["Nom", "Classe", "Photo"])
sheet.append(["Rakoto", "6e A", "photo.jpg"])
workbook.save("resultat.xlsx")`,
    caption: "Exemple simplifié d’un classeur Excel généré avec openpyxl.",
  },
};

export const projects: Project[] = [
  {
    slug: "shopinmada",
    title: "ShopInMada",
    tagline: "Marketplace multi-vendeurs",
    category: "Marketplace",
    type: "Projet client (privé)",
    sector: "E-commerce / marketplace",
    dateLabel: "2025 → 2026",
    role: "Ingénieur logiciel : modernisation de l’interface, développement backend et intégration d’API, déploiement et configuration du VPS.",
    team: [
      { name: "Avotra Frederic", role: "Backend, API et déploiement" },
      { name: "Rafanomezantsoa Jean Augustin", role: "Développeur frontend" },
    ],
    status: "en production",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Docker", "GitHub Actions"],
    summary: "Marketplace e-commerce pour les boutiques locales de Madagascar.",
    context: "Les boutiques locales ont besoin d’un outil pour présenter leurs produits, gérer leur catalogue et leurs commandes, et garder le contact avec leurs clients.",
    solution: "La plateforme réunit l’achat en ligne, la gestion vendeur et l’administration, avec des API séparées pour le catalogue et les intégrations.",
    features: [
      "Catalogue en ligne pour découvrir les boutiques et leurs produits.",
      "Espace vendeur pour présenter une boutique et gérer son offre.",
      "Parcours client avec panier et suivi des commandes.",
      "Interface d’administration pour piloter la marketplace.",
      "Déploiement conteneurisé avec Docker et GitHub Actions sur un VPS.",
    ],
    links: { live: "https://shopinmada.com" },
    cover: "/projects/shopinmada-cover.webp",
  },
  {
    slug: "category-api",
    title: "Category API",
    tagline: "API REST · Catalogue",
    category: "API backend",
    type: "API backend développée pour ShopInMada",
    sector: "E-commerce / API backend",
    dateLabel: "2025 → 2026",
    role: "Développeur backend : conception et développement de l’API REST et de son modèle de catégories MongoDB.",
    team: [{ name: "Avotra Frederic", role: "Conception et développement" }],
    status: "terminé",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
    summary: "Service REST indépendant pour le catalogue hiérarchique de ShopInMada.",
    context: "La gestion et la recherche des catégories ne doivent pas être couplées au cœur de l’API marketplace.",
    solution: "Un service REST autonome expose le catalogue hiérarchique et peut être consommé par ShopInMada.",
    features: [
      "Consultation de la liste des catégories.",
      "Accès aux catégories parentes et enfants.",
      "Recherche de catégories.",
      "Initialisation du catalogue à partir d’un jeu de données.",
    ],
    results: ["API versionnée sous /api/v1, connectée à MongoDB et intégrée au catalogue de ShopInMada."],
    links: { github: "https://github.com/Avotra-frederic/categoryAPI" },
    cover: "",
    ...(exampleSamples["category-api"] ? { codeSample: exampleSamples["category-api"] } : {}),
  },
  {
    slug: "hadipharma",
    title: "HadiPharma",
    tagline: "Gestion de pharmacie · Web & mobile",
    category: "Santé",
    type: "Projet client",
    sector: "Santé / gestion pharmaceutique",
    dateLabel: "Mai – Juil. 2026",
    role: "Ingénieur logiciel : conception et développement individuel du frontend web/mobile et de l’API backend, avec gestion des données et des mises à jour en temps réel.",
    team: [{ name: "Avotra Frederic", role: "Conception et développement logiciel" }],
    status: "terminé",
    stack: ["React", "TypeScript", "Capacitor", "Express", "MongoDB", "WebSocket"],
    summary: "Application web et mobile de recherche de pharmacies et de médicaments, avec des outils de gestion pharmaceutique.",
    context: "Les utilisateurs ont besoin de trouver des pharmacies et des médicaments disponibles; les pharmacies doivent aussi gérer leurs commandes, stocks et équipes.",
    solution: "Une application web et mobile centralise la recherche destinée au public et les opérations quotidiennes des pharmacies.",
    features: [
      "Recherche de pharmacies et de médicaments.",
      "Gestion multi-pharmacies des commandes et des stocks.",
      "Tableaux de bord d’administration, gestion des utilisateurs et des équipes.",
      "Gestion des abonnements et notifications.",
      "Mises à jour et suivi en temps réel.",
    ],
    results: ["Application web et mobile réunissant la recherche publique et les outils de gestion des pharmacies."],
    links: { github: "https://github.com/Avotra-frederic/hadipharma" },
    cover: "",
  },
  {
    slug: "python-automation",
    title: "Python Automation",
    tagline: "Automatisation · Python",
    category: "Automatisation",
    type: "Projet personnel",
    sector: "Automatisation / productivité",
    dateLabel: "2026",
    role: "Développeur Python : conception et réalisation individuelle de scripts d’automatisation.",
    team: [{ name: "Avotra Frederic", role: "Conception et développement" }],
    status: "terminé",
    stack: ["Python", "openpyxl", "Excel", "Automatisation"],
    summary: "Scripts Python pour automatiser des tâches répétitives, dont la génération d’un classeur Excel à partir de photos.",
    context: "La saisie manuelle des noms et classes associés à des photos, puis la création de liens vers les images, est répétitive.",
    solution: "Un script Python prépare un classeur Excel à partir des noms de fichiers photo et des informations qu’ils contiennent.",
    features: [
      "Lecture des noms de fichiers et déduction des classes.",
      "Tri des entrées et génération d’un classeur Excel.",
      "Ajout de filtres et de liens relatifs vers les photos.",
    ],
    results: ["Génération d’un classeur Excel à trois colonnes (nom, classe, photo), avec liens relatifs cliquables, tri et filtre."],
    links: { github: "https://github.com/Avotra-frederic/python-automation" },
    cover: "",
    ...(exampleSamples["python-automation"] ? { codeSample: exampleSamples["python-automation"] } : {}),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
