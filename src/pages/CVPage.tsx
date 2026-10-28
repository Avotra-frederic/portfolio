import { profile } from "../data/profile";
import { contactInfo } from "../data/contact";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { cvSkillGroups } from "../data/skills";
import { Button } from "../components/ui";

export default function CV() {
  return (
    <main className="cv-page page-width inner-page">
      <div className="cv-toolbar">
        <span className="eyebrow">CURRICULUM VITAE · 2026</span>
        <Button
          className="button-dark cv-print-button"
          type="button"
          onClick={() => window.print()}
        >
          Imprimer / Enregistrer en PDF
        </Button>
      </div>
      <article className="cv-sheet">
        <header className="cv-heading">
          <p className="eyebrow">
            INGÉNIEUR LOGICIEL · FORMATEUR EN INFORMATIQUE
          </p>
          <h1>
            {profile.name}
            <br />
            <span>RAKOTOMAMONJY</span>
          </h1>
          <p>
            Conception et développement d’applications web et mobiles, d’API
            backend et d’outils d’automatisation.
          </p>
          <div className="cv-contact">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phoneHref}`}>{contactInfo.phone}</a>
            <span>{profile.location}</span>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>
        <section className="cv-section">
          <h2>Expérience</h2>
          {experience.map((entry) => (
            <article key={entry.title}>
              <div className="cv-entry-head">
                <h3>{entry.title}</h3>
                <span>{entry.cvPeriod}</span>
              </div>
              <p className="cv-place">{entry.organization}</p>
              <p>{entry.cvDescription}</p>
            </article>
          ))}
        </section>
        <section className="cv-section">
          <h2>Projets sélectionnés</h2>
          {projects.filter((project) => project.cv).map((project) => (
            <article key={project.slug}>
              <div className="cv-entry-head">
                <h3>
                  {project.title}
                  {project.cv?.role ? ` · ${project.cv.role}` : ""}
                </h3>
                <span>{project.cv?.period}</span>
              </div>
              <p>{project.cv?.summary}</p>
            </article>
          ))}
        </section>
        <section className="cv-section">
          <h2>Formation</h2>
          {education.map((entry) => (
            <article key={entry.degree}>
              <div className="cv-entry-head">
                <h3>{entry.degree}</h3>
                <span>{entry.year}</span>
              </div>
              <p className="cv-place">{entry.institution}</p>
            </article>
          ))}
        </section>
        <section className="cv-section">
          <h2>Compétences</h2>
          <p>
            {cvSkillGroups.map((group, index) => (
              <span key={group.label}>
                {index > 0 && <br />}
                <strong>{group.label} :</strong> {group.skills.join(", ")}
              </span>
            ))}
          </p>
        </section>
      </article>
    </main>
  );
}
