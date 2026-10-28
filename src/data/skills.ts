const frontendSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Capacitor",
  "Ionic",
] as const;

const backendSkills = ["Node.js", "Express", "PHP", "Laravel", "API REST"] as const;
const dataSkills = ["MongoDB", "Mongoose", "PostgreSQL"] as const;
const deliverySkills = ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "VPS"] as const;
const automationSkills = ["Python", "openpyxl"] as const;

export const cvSkillGroups = [
  { label: "Frontend", skills: frontendSkills },
  { label: "Backend", skills: backendSkills },
  { label: "Données", skills: dataSkills },
  { label: "Livraison", skills: deliverySkills },
  { label: "Automatisation", skills: automationSkills },
] as const;

export const skillGroups = [
  { title: "Frontend & mobile", skills: frontendSkills },
  { title: "Backend & données", skills: [...backendSkills, ...dataSkills] },
  {
    title: "Déploiement & automatisation",
    skills: [...deliverySkills, ...automationSkills],
  },
] as const;
