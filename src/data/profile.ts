interface AboutStat {
  value: string;
  label: string;
}

interface Profile {
  name: string;
  title: string;
  location: string;
  heroLabel: string;
  photoCaption: string;
  heroDescription: string;
  focusTags: string[];
  aboutHeading: string;
  aboutText: string;
  aboutStats: AboutStat[];
  seoDescription: string;
}

export const profile: Profile = {
  name: "Avotra Frederic",
  title: "Ingénieur logiciel",
  location: "Antananarivo, Madagascar",
  heroLabel: "Ingénieur logiciel · Formateur · Antananarivo, Madagascar",
  photoCaption: "Software Engineer",
  heroDescription: "Je conçois et développe des logiciels adaptés à chaque besoin : applications web et mobiles, API, outils d'automatisation. Je choisis la technologie selon le problème à résoudre, et je m'appuie sur mon expérience de formateur en informatique pour accompagner les apprenants en développement et en algorithmique.",
  focusTags: ["Applications web & mobiles", "API & architecture", "Automatisation"],
  aboutHeading: "Du développement logiciel à la transmission.",
  aboutText: "Je suis Avotra Frederic, ingénieur logiciel et formateur en informatique à Antananarivo. Je conçois des solutions logicielles à partir des besoins qu'on me confie, en gardant l'usage et la maintenance au centre du travail.",
  aboutStats: [
    { value: "4", label: "projets présentés" },
    { value: "2022", label: "début de mon activité de formateur" },
    { value: "Web · Mobile · API · Automatisation", label: "types de solutions réalisées" },
  ],
  seoDescription: "Avotra Frederic, ingénieur logiciel et formateur à Antananarivo : applications web et mobiles, API et automatisation sur mesure.",
};
