import { projects } from "../data/projects";
import ContactBand from "../components/ContactBand";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <main className="inner-page page-width">
      <div className="page-intro">
        <span className="eyebrow">PROJETS &#183; WEB &#183; BACKEND</span>
        <h1>
          Des id&eacute;es traduites
          <br />
          <span>en logiciels utiles.</span>
        </h1>
        <p>
          Applications m&eacute;tier, API et sites web : voici une
          s&eacute;lection de r&eacute;alisations. Chaque fiche pr&eacute;sente
          le contexte connu, les technologies utilis&eacute;es et les liens
          disponibles.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <ContactBand />
    </main>
  );
}
