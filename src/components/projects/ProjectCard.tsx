import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Badge } from "../ui";
import { CategoryApiCover } from "../CategoryApiCover";
import { HadiPharmaCover } from "../HadiPharmaCover";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  eagerImage?: boolean;
}
interface ProjectCoverProps {
  project: Project;
  eagerImage?: boolean;
}

export function ProjectCover({ project, eagerImage = false }: ProjectCoverProps) {
  if (project.cover) {
    return (
      <div className="project-art project-image-art" aria-hidden="true">
        <img
          src={project.cover}
          alt=""
          loading={eagerImage ? "eager" : "lazy"}
          fetchPriority={eagerImage ? "high" : "auto"}
          decoding="async"
          width={1366}
          height={768}
        />
      </div>
    );
  }
  if (project.slug === "category-api") return <CategoryApiCover />;
  if (project.slug === "hadipharma") return <HadiPharmaCover />;
  if (project.slug === "python-automation") {
    return (
      <div className="project-art python-art" aria-hidden="true">
        <div className="python-script">
          <span>PYTHON &#183; SCRIPT</span>
          <code>for photo in folder:</code>
          <code> add_spreadsheet_link()</code>
          <code>export_workbook()</code>
        </div>
        <span className="python-arrow" aria-hidden="true">
          &#8594;
        </span>
        <div className="excel-sheet">
          <strong>Excel</strong>
          <span>Nom</span>
          <span>Classe</span>
          <span>Photo</span>
          <span>Rakoto</span>
          <span>6e A</span>
          <span>photo.jpg</span>
        </div>
      </div>
    );
  }
  return (
    <div className="project-art project-fallback" aria-hidden="true">
      <span className="fallback-kicker">{project.category}</span>
      <strong>{project.title}</strong>
      <div className="fallback-stack">
        {project.stack.slice(0, 4).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, featured = false, eagerImage = false }: ProjectCardProps) {
  const visibleTags = project.stack.slice(0, 4);
  const hiddenTags = project.stack.length - visibleTags.length;
  return (
    <article
      className={`project-card-shell${featured ? " project-featured" : ""}`}
    >
      <Link
        className="project-card"
        to={`/projets/${project.slug}`}
        aria-label={`Voir le projet ${project.title}`}
      >
        <ProjectCover project={project} eagerImage={eagerImage} />
        <div className="project-info">
          <div className="project-overline">
            <span>
              {project.category} · {project.dateLabel}
            </span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-bottom">
            <div className="tag-list">
              {visibleTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              {hiddenTags > 0 && <Badge>+{hiddenTags}</Badge>}
            </div>
            <span className="project-arrow" aria-hidden="true">
              <LiaArrowRightSolid />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
