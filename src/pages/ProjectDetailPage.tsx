import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { m as motion, useReducedMotion } from "framer-motion";
import {
  LiaArrowRightSolid,
  LiaCheckSolid,
} from "react-icons/lia";
import { Badge } from "../components/ui";
import ContactBand from "../components/ContactBand";
import { ProjectCover } from "../components/projects/ProjectCard";
import { ProjectLinkList } from "../components/projects/ProjectLinkList";
import { getProjectBySlug, projects } from "../data/projects";
import type { GalleryImage, Project } from "../types/project";
import NotFoundPage from "./NotFoundPage";

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
}

function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        window.requestAnimationFrame(() => returnFocusRef.current?.focus());
      }
      if (event.key === "ArrowRight")
        setActiveIndex((index) =>
          index === null ? 0 : (index + 1) % images.length,
        );
      if (event.key === "ArrowLeft")
        setActiveIndex((index) =>
          index === null ? 0 : (index - 1 + images.length) % images.length,
        );
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
        );
        const first = focusable.item(0);
        const last = focusable.item(focusable.length - 1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  if (images.length === 0) return null;
  const activeImage = activeIndex === null ? undefined : images[activeIndex];
  const move = (delta: number) =>
    setActiveIndex((index) =>
      index === null ? 0 : (index + delta + images.length) % images.length,
    );
  return (
    <section className="detail-section">
      <h2>Galerie</h2>
      <div className="detail-gallery">
        {images.map((image, index) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={(event) => {
                returnFocusRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              aria-label={`Ouvrir l&#39;image ${index + 1} : ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={900}
                height={600}
                loading="lazy"
              />
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      {activeImage && (
        <div
          className="lightbox-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(null);
              window.requestAnimationFrame(() =>
                returnFocusRef.current?.focus(),
              );
            }
          }}
        >
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie ${title}`}
            ref={dialogRef}
          >
            <button
              ref={closeRef}
              type="button"
              className="lightbox-close"
              onClick={() => {
                setActiveIndex(null);
                window.requestAnimationFrame(() =>
                  returnFocusRef.current?.focus(),
                );
              }}
              aria-label="Fermer la galerie"
            >
              &#215;
            </button>
            {images.length > 1 && (
              <button
                type="button"
                className="lightbox-prev"
                onClick={() => move(-1)}
                aria-label="Image pr&eacute;c&eacute;dente"
              >
                &#8249;
              </button>
            )}
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              width={1200}
              height={800}
            />
            <p>{activeImage.caption}</p>
            {images.length > 1 && (
              <button
                type="button"
                className="lightbox-next"
                onClick={() => move(1)}
                aria-label="Image suivante"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  if (!project) return <NotFoundPage />;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length] ?? project;
  const nextProject =
    projects[(projectIndex + 1) % projects.length] ?? project;
  const copyCode = async () => {
    if (!project.codeSample) return;
    await navigator.clipboard.writeText(project.codeSample.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const caseSections = [
    { title: "Contexte et problème", content: <p>{project.context}</p> },
    { title: "Solution", content: <p>{project.solution}</p> },
    {
      title: "Fonctionnalités",
      content: project.features.length ? (
        <ul className="check-list">
          {project.features.map((feature) => (
            <li key={feature}>
              <LiaCheckSolid aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null,
    },
    {
      title: "Défis et décisions",
      content: project.challenges?.length ? (
        <div className="challenge-list">
          {project.challenges.map((challenge, index) => (
            <article key={challenge.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : import.meta.env.DEV ? (
        <p className="dev-placeholder">Défis du projet à documenter.</p>
      ) : null,
    },
    {
      title: "Résultats",
      content: project.results?.length ? (
        <ul className="check-list">
          {project.results.map((result) => (
            <li key={result}>
              <LiaCheckSolid aria-hidden="true" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      ) : import.meta.env.DEV ? (
        <p className="dev-placeholder">Résultats du projet à documenter.</p>
      ) : null,
    },
  ].filter((section) => section.content !== null);

  return (
    <motion.main
      className="project-detail page-width"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
    >
      <nav className="breadcrumb" aria-label="Fil d&#39;Ariane">
        <Link to="/projets">Projets</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.title}</span>
      </nav>
      <header className="detail-header">
        <span className="eyebrow">{project.category}</span>
        <h1>{project.title}</h1>
        <p className="detail-tagline">{project.tagline}</p>
        <Badge>{project.status}</Badge>
        <ProjectLinkList project={project} variant="actions" />
      </header>
      <div className="detail-cover">
        <ProjectCover project={project} eagerImage />
      </div>
      <div className="detail-layout">
        <div className="detail-main">
          {caseSections.map((section, index) => (
            <section className="detail-section" key={section.title}>
              <h2>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
          {project.codeSample && (
            <section className="detail-section">
              <div className="detail-section-heading">
                <h2>Extrait de code</h2>
                <button
                  type="button"
                  className="copy-button"
                  onClick={() => void copyCode()}
                >
                  {copied ? "Copi?" : "Copier"}
                </button>
              </div>
              {project.codeSample.caption && (
                <p>{project.codeSample.caption}</p>
              )}
              <pre className="code-sample">
                <code>{project.codeSample.code}</code>
              </pre>
            </section>
          )}
          {project.beforeAfter && (
            <section className="detail-section">
              <h2>Avant / après</h2>
              <div className="before-after">
                <article>
                  <h3>Avant</h3>
                  <p>{project.beforeAfter.before}</p>
                </article>
                <article>
                  <h3>Après</h3>
                  <p>{project.beforeAfter.after}</p>
                </article>
              </div>
            </section>
          )}
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}
        </div>
        <ProjectFacts project={project} />
      </div>
      <nav
        className="project-pagination"
        aria-label="Navigation entre les projets"
      >
        <Link to={"/projets/" + previousProject.slug}>
          <span>Projet précédent</span>
          <strong>
            <LiaArrowRightSolid aria-hidden="true" />
            {previousProject.title}
          </strong>
        </Link>
        <Link to={"/projets/" + nextProject.slug}>
          <span>Projet suivant · {nextProject.category}</span>
          <strong>
            {nextProject.title}
            <LiaArrowRightSolid aria-hidden="true" />
          </strong>
        </Link>
      </nav>
      <ContactBand />
    </motion.main>
  );
}

function ProjectFacts({ project }: { project: Project }) {
  return (
    <aside className="project-facts">
      <h2>Fiche projet</h2>
      <dl>
        <div>
          <dt>Type</dt>
          <dd>{project.type}</dd>
        </div>
        <div>
          <dt>Secteur</dt>
          <dd>{project.sector}</dd>
        </div>
        <div>
          <dt>Période</dt>
          <dd>{project.dateLabel}</dd>
        </div>
        <div>
          <dt>Statut</dt>
          <dd>
            <Badge>{project.status}</Badge>
          </dd>
        </div>
        <div>
          <dt>Rôle</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>
      <section>
        <h3>Équipe</h3>
        <ul className="team-list">
          {project.team.map((member) => (
            <li key={member.name}>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Stack</h3>
        <div className="skills-cloud">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </section>
      <section>
        <h3>Liens</h3>
        <ProjectLinkList project={project} variant="facts" />
      </section>
    </aside>
  );
}
