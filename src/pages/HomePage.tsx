import { Link, NavLink } from "react-router-dom";
import {
  LiaArrowDownSolid,
  LiaArrowRightSolid,
  LiaExternalLinkAltSolid,
} from "react-icons/lia";
import portrait from "../assets/moi.webp";
import { ButtonLink, Container, Section } from "../components/ui";
import ContactBand from "../components/ContactBand";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { contactInfo } from "../data/contact";

export default function Home() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            {profile.heroLabel}
          </div>
          <h1>
            <span>Du besoin métier</span>
            <span>à un logiciel</span>
            <span>prêt à évoluer.</span>
          </h1>
          <p className="hero-intro">{profile.heroDescription}</p>
          <div className="hero-actions">
            <ButtonLink className="button button-dark" path="/projets">
              Explorer mes réalisations <LiaArrowRightSolid />
            </ButtonLink>
            <ButtonLink
              className="text-link"
              path={`mailto:${contactInfo.email}`}
            >
              Me contacter <LiaArrowRightSolid />
            </ButtonLink>
            <ButtonLink className="text-link" path="/cv">
              Télécharger mon CV <LiaArrowRightSolid />
            </ButtonLink>
          </div>
          <div className="hero-socials">
            <Link
              to={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <LiaExternalLinkAltSolid />
            </Link>
            <Link
              to={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <LiaExternalLinkAltSolid />
            </Link>
          </div>
          <div className="hero-meta">
            {profile.focusTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="portrait-frame">
            <img
              src={portrait}
              alt={"Portrait de " + profile.name}
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span className="caption-label">
                {profile.name.toUpperCase()}
              </span>
              <span>{profile.photoCaption}</span>
            </div>
          </div>
          <div className="floating-note">
            <span className="note-icon">✳</span>
            <span>
              Du concept
              <br />
              au produit.
            </span>
          </div>
          <span className="visual-index">PORTFOLIO — 2025 → 2026</span>
        </div>
        <a className="scroll-cue" href="#projets">
          <span>Défiler pour explorer</span>
          <LiaArrowDownSolid />
        </a>
      </section>
      <Section className="about-section" id="apropos">
        <Container className="about-grid">
          <div>
            <span className="eyebrow">À PROPOS</span>
            <h2>{profile.aboutHeading}</h2>
            <p>{profile.aboutText}</p>
          </div>
          <div className="about-stats" aria-label="Repères de mon parcours">
            {profile.aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="featured-section" id="projets">
        <Container>
          <div className="section-heading">
            <div>
              <span className="eyebrow">SÉLECTION · PROJETS RÉELS</span>
              <h2>
                Concevoir. Construire.
                <br />
                <span>Faire évoluer.</span>
              </h2>
            </div>
            <NavLink to="/projets" className="text-link">
              Tous les projets <LiaArrowRightSolid />
            </NavLink>
          </div>
          <div className="featured-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured
                eagerImage={index === 0}
              />
            ))}
          </div>
        </Container>
      </Section>
      <Section className="intro-band">
        <Container className="intro-band-inner">
          <span className="eyebrow">MON APPROCHE</span>
          <p>
            Comprendre le système. Construire avec méthode.{" "}
            <span>Automatiser ce qui peut l’être.</span>
          </p>
          <NavLink
            to="/parcours"
            className="round-link"
            aria-label="Découvrir mon parcours"
          >
            <LiaArrowRightSolid />
          </NavLink>
        </Container>
      </Section>
      <Section id="contact" className="home-contact">
        <Container>
          <ContactBand />
        </Container>
      </Section>
    </>
  );
}
