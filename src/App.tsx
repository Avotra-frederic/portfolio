import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { LazyMotion, domAnimation, m as motion, useReducedMotion } from "framer-motion";
import { LiaArrowDownSolid, LiaArrowRightSolid, LiaExternalLinkAltSolid, LiaLinkedin, LiaMapMarkerSolid, LiaPhoneSolid, LiaEnvelopeSolid, LiaSunSolid, LiaMoonSolid, LiaBarsSolid, LiaTimesSolid, LiaCheckSolid } from "react-icons/lia";
import portrait from "./assets/moi.webp";

import { getProjectBySlug, projects } from "./data/projects";
import type { GalleryImage, Project } from "./types/project";
import { Badge, ButtonLink, Card, Container, Section } from "./components/ui";
import { skillGroups } from "./data/skills";
import { experience } from "./data/experience";
import { profile } from "./data/profile";
import { SEO } from "./components/SEO";
import { CategoryApiCover } from "./components/CategoryApiCover";
import { HadiPharmaCover } from "./components/HadiPharmaCover";

type Theme = "light" | "dark";

interface HeaderProps { theme: Theme; onToggleTheme: () => void }

function Header({ theme, onToggleTheme }: HeaderProps) {
  const links = [["Accueil", "/"], ["À propos", "/#apropos"], ["Projets", "/projets"], ["Parcours", "/parcours"], ["CV", "/cv"], ["Contact", "/contact"]] as const;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") { setActiveSection(""); return; }
    const updateActiveSection = () => {
      const current = ["apropos", "projets"].find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const bounds = section.getBoundingClientRect();
        return bounds.top <= window.innerHeight * 0.45 && bounds.bottom > window.innerHeight * 0.3;
      }) ?? "";
      setActiveSection((previous) => previous === current ? previous : current);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [location.pathname]);

  return <header className="site-header">
    <a className="wordmark" href="/" aria-label={profile.name + " — accueil"}><span className="wordmark-mark">AF<span>.</span></span><span className="wordmark-name">{profile.name}</span></a>
    <nav id="primary-navigation" className={"main-nav" + (mobileOpen ? " mobile-open" : "")} aria-label="Navigation principale">
      {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setMobileOpen(false)} className={({ isActive }) => {
        const active = path === "/" ? isActive && !activeSection : path === "/#apropos" ? location.pathname === "/" && activeSection === "apropos" : path === "/projets" ? isActive || (location.pathname === "/" && activeSection === "projets") : isActive;
        return active ? "nav-link active" : "nav-link";
      }}>{label}</NavLink>)}
    </nav>
    <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={"Activer le thème " + (theme === "light" ? "sombre" : "clair")} title={"Thème " + (theme === "light" ? "sombre" : "clair")}>{theme === "light" ? <LiaMoonSolid /> : <LiaSunSolid />}</button>
    <button className="menu-toggle" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}>{mobileOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}</button>
    <a className="header-cta" href="mailto:fred.avotra@gmail.com">Parlons de votre projet <LiaArrowRightSolid /></a>
  </header>;
}
function Footer() { return <footer className="site-footer"><span>© 2025–{new Date().getFullYear()} {profile.name}</span><span>Conçu et développé à {profile.location}</span><span className="footer-socials"><a href="https://github.com/Avotra-frederic" target="_blank" rel="noreferrer">GitHub <LiaExternalLinkAltSolid /></a><a href="https://linkedin.com/in/avotra-frederic" target="_blank" rel="noreferrer">LinkedIn <LiaExternalLinkAltSolid /></a></span></footer>; }

function Home() {
  return <><section className="hero page-width"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/>{profile.heroLabel}</div><h1><span>Du besoin métier</span><span>à un logiciel</span><span>prêt à évoluer.</span></h1><p className="hero-intro">{profile.heroDescription}</p><div className="hero-actions"><ButtonLink className="button button-dark" href="/projets">Explorer mes réalisations <LiaArrowRightSolid /></ButtonLink><ButtonLink className="text-link" href="mailto:fred.avotra@gmail.com">Me contacter <LiaArrowRightSolid /></ButtonLink><ButtonLink className="text-link" href="/cv">Télécharger mon CV <LiaArrowRightSolid /></ButtonLink></div><div className="hero-socials"><a href="https://github.com/Avotra-frederic" target="_blank" rel="noreferrer">GitHub <LiaExternalLinkAltSolid /></a><a href="https://linkedin.com/in/avotra-frederic" target="_blank" rel="noreferrer">LinkedIn <LiaExternalLinkAltSolid /></a></div><div className="hero-meta">{profile.focusTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="hero-visual"><div className="visual-grid"/><div className="portrait-frame"><img src={portrait} alt={"Portrait de " + profile.name} fetchPriority="high"/><div className="portrait-caption"><span className="caption-label">{profile.name.toUpperCase()}</span><span>{profile.photoCaption}</span></div></div><div className="floating-note"><span className="note-icon">✳</span><span>Du concept<br/>au produit.</span></div><span className="visual-index">PORTFOLIO — 2025 → 2026</span></div><a className="scroll-cue" href="#projets"><span>Défiler pour explorer</span><LiaArrowDownSolid/></a></section><Section className="about-section" id="apropos"><Container className="about-grid"><div><span className="eyebrow">À PROPOS</span><h2>{profile.aboutHeading}</h2><p>{profile.aboutText}</p></div><div className="about-stats" aria-label="Repères de mon parcours">{profile.aboutStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></Container></Section><Section className="featured-section" id="projets"><Container><div className="section-heading"><div><span className="eyebrow">SÉLECTION · PROJETS RÉELS</span><h2>Concevoir. Construire.<br/><span>Faire évoluer.</span></h2></div><NavLink to="/projets" className="text-link">Tous les projets <LiaArrowRightSolid/></NavLink></div><div className="featured-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} featured/>)}</div></Container></Section><Section className="intro-band"><Container className="intro-band-inner"><span className="eyebrow">MON APPROCHE</span><p>Comprendre le système. Construire avec méthode. <span>Automatiser ce qui peut l’être.</span></p><NavLink to="/parcours" className="round-link" aria-label="Découvrir mon parcours"><LiaArrowRightSolid/></NavLink></Container></Section><Section id="contact" className="home-contact"><Container><ContactBand/></Container></Section></>;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

interface ProjectCoverProps {
  project: Project;
  featured?: boolean;
}

function ProjectCover({ project, featured = false }: ProjectCoverProps) {
  if (project.cover) {
    return <div className="project-art project-image-art" aria-hidden="true"><img src={project.cover} alt="" loading={featured ? "eager" : "lazy"} width={1366} height={768}/></div>;
  }
  if (project.slug === "category-api") return <CategoryApiCover/>;
  if (project.slug === "hadipharma") return <HadiPharmaCover/>;
  if (project.slug === "python-automation") {
    return <div className="project-art python-art" aria-hidden="true">
      <div className="python-script"><span>PYTHON &#183; SCRIPT</span><code>for photo in folder:</code><code>  add_spreadsheet_link()</code><code>export_workbook()</code></div>
      <span className="python-arrow" aria-hidden="true">&#8594;</span>
      <div className="excel-sheet"><strong>Excel</strong><span>Nom</span><span>Classe</span><span>Photo</span><span>Rakoto</span><span>6e A</span><span>photo.jpg</span></div>
    </div>;
  }
  return <div className="project-art project-fallback" aria-hidden="true">
    <span className="fallback-kicker">{project.category}</span><strong>{project.title}</strong><div className="fallback-stack">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
  </div>;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const visibleTags = project.stack.slice(0, 4);
  const hiddenTags = project.stack.length - visibleTags.length;
  return <article className={`project-card-shell${featured ? " project-featured" : ""}`}>
    <Link className="project-card" to={`/projets/${project.slug}`} aria-label={`Voir le projet ${project.title}`}>
      <ProjectCover project={project} featured={featured}/>
      <div className="project-info">
        <div className="project-overline"><span>{project.category} · {project.dateLabel}</span></div>
        <h3>{project.title}</h3><p>{project.summary}</p>
        <div className="project-bottom"><div className="tag-list">{visibleTags.map((tag) => <Badge key={tag}>{tag}</Badge>)}{hiddenTags > 0 && <Badge>+{hiddenTags}</Badge>}</div><span className="project-arrow" aria-hidden="true"><LiaArrowRightSolid/></span></div>
      </div>
    </Link>
  </article>;
}

function Projects() {
  return <main className="inner-page page-width"><div className="page-intro"><span className="eyebrow">PROJETS &#183; WEB &#183; BACKEND</span><h1>Des id&eacute;es traduites<br/><span>en logiciels utiles.</span></h1><p>Applications m&eacute;tier, API et sites web : voici une s&eacute;lection de r&eacute;alisations. Chaque fiche pr&eacute;sente le contexte connu, les technologies utilis&eacute;es et les liens disponibles.</p></div><div className="project-list">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div><ContactBand/></main>;
}

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
      if (event.key === "Escape") { setActiveIndex(null); window.requestAnimationFrame(() => returnFocusRef.current?.focus()); }
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? 0 : (index + 1) % images.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? 0 : (index - 1 + images.length) % images.length);
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
        const first = focusable.item(0);
        const last = focusable.item(focusable.length - 1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);



  if (images.length === 0) return null;
  const activeImage = activeIndex === null ? undefined : images[activeIndex];
  const move = (delta: number) => setActiveIndex((index) => index === null ? 0 : (index + delta + images.length) % images.length);
  return <section className="detail-section"><h2>Galerie</h2><div className="detail-gallery">{images.map((image, index) => <figure key={image.src}><button type="button" onClick={(event) => { returnFocusRef.current = event.currentTarget; setActiveIndex(index); }} aria-label={`Ouvrir l&#39;image ${index + 1} : ${image.alt}`}><img src={image.src} alt={image.alt} width={900} height={600} loading="lazy"/></button><figcaption>{image.caption}</figcaption></figure>)}</div>
    {activeImage && <div className="lightbox-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setActiveIndex(null); window.requestAnimationFrame(() => returnFocusRef.current?.focus()); } }}><div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={`Galerie ${title}`} ref={dialogRef}><button ref={closeRef} type="button" className="lightbox-close" onClick={() => { setActiveIndex(null); window.requestAnimationFrame(() => returnFocusRef.current?.focus()); }} aria-label="Fermer la galerie">&#215;</button>{images.length > 1 && <button type="button" className="lightbox-prev" onClick={() => move(-1)} aria-label="Image pr&eacute;c&eacute;dente">&#8249;</button>}<img src={activeImage.src} alt={activeImage.alt} width={1200} height={800}/><p>{activeImage.caption}</p>{images.length > 1 && <button type="button" className="lightbox-next" onClick={() => move(1)} aria-label="Image suivante">&#8250;</button>}</div></div>}
  </section>;
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  if (!project) return <NotFound/>;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const copyCode = async () => {
    if (!project.codeSample) return;
    await navigator.clipboard.writeText(project.codeSample.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const caseSections = [
    { title: "Contexte et problème", content: <p>{project.context}</p> },
    { title: "Solution", content: <p>{project.solution}</p> },
    { title: "Fonctionnalités", content: project.features.length ? <ul className="check-list">{project.features.map((feature) => <li key={feature}><LiaCheckSolid aria-hidden="true"/><span>{feature}</span></li>)}</ul> : null },
    { title: "Défis et décisions", content: project.challenges?.length ? <div className="challenge-list">{project.challenges.map((challenge, index) => <article key={challenge.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{challenge.title}</h3><p>{challenge.description}</p></div></article>)}</div> : import.meta.env.DEV ? <p className="dev-placeholder">Défis du projet à documenter.</p> : null },
    { title: "Résultats", content: project.results?.length ? <ul className="check-list">{project.results.map((result) => <li key={result}><LiaCheckSolid aria-hidden="true"/><span>{result}</span></li>)}</ul> : import.meta.env.DEV ? <p className="dev-placeholder">Résultats du projet à documenter.</p> : null },
  ].filter((section) => section.content !== null);

  return <motion.main className="project-detail page-width" initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}>
    <nav className="breadcrumb" aria-label="Fil d&#39;Ariane"><Link to="/projets">Projets</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav>
    <header className="detail-header"><span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p className="detail-tagline">{project.tagline}</p><Badge>{project.status}</Badge><div className="detail-actions">{project.links.live && <a className="button button-dark" href={project.links.live} target="_blank" rel="noopener noreferrer">Voir le site <LiaExternalLinkAltSolid/></a>}{project.links.github && <a className="button button-outline" href={project.links.github} target="_blank" rel="noopener noreferrer">Code source <LiaExternalLinkAltSolid/></a>}</div></header>
    <div className="detail-cover"><ProjectCover project={project}/></div>
    <div className="detail-layout"><div className="detail-main">
      {caseSections.map((section, index) => <section className="detail-section" key={section.title}><h2><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>{section.content}</section>)}
      {project.codeSample && <section className="detail-section"><div className="detail-section-heading"><h2>Extrait de code</h2><button type="button" className="copy-button" onClick={() => void copyCode()}>{copied ? "Copi?" : "Copier"}</button></div>{project.codeSample.caption && <p>{project.codeSample.caption}</p>}<pre className="code-sample"><code>{project.codeSample.code}</code></pre></section>}
      {project.beforeAfter && <section className="detail-section"><h2>Avant / après</h2><div className="before-after"><article><h3>Avant</h3><p>{project.beforeAfter.before}</p></article><article><h3>Après</h3><p>{project.beforeAfter.after}</p></article></div></section>}
      {project.gallery && project.gallery.length > 0 && <ProjectGallery images={project.gallery} title={project.title}/>}
    </div><ProjectFacts project={project}/></div>
    <nav className="project-pagination" aria-label="Navigation entre les projets"><Link to={"/projets/" + previousProject.slug}><span>Projet précédent</span><strong><LiaArrowRightSolid aria-hidden="true"/>{previousProject.title}</strong></Link><Link to={"/projets/" + nextProject.slug}><span>Projet suivant · {nextProject.category}</span><strong>{nextProject.title}<LiaArrowRightSolid aria-hidden="true"/></strong></Link></nav>
    <ContactBand/>
  </motion.main>;
}


function ProjectFacts({ project }: { project: Project }) {
  return <aside className="project-facts"><h2>Fiche projet</h2><dl><div><dt>Type</dt><dd>{project.type}</dd></div><div><dt>Secteur</dt><dd>{project.sector}</dd></div><div><dt>Période</dt><dd>{project.dateLabel}</dd></div><div><dt>Statut</dt><dd><Badge>{project.status}</Badge></dd></div><div><dt>Rôle</dt><dd>{project.role}</dd></div></dl><section><h3>Équipe</h3><ul className="team-list">{project.team.map((member) => <li key={member.name}><strong>{member.name}</strong><span>{member.role}</span></li>)}</ul></section><section><h3>Stack</h3><div className="skills-cloud">{project.stack.map((item) => <Badge key={item}>{item}</Badge>)}</div></section><section><h3>Liens</h3><div className="facts-links">{project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Voir le site <LiaExternalLinkAltSolid/></a>}{project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">Code source <LiaExternalLinkAltSolid/></a>}</div></section></aside>;
}
function NotFound() {
  return <main className="page-width not-found"><span className="eyebrow">404</span><h1>Projet introuvable</h1><p>Ce projet n&#39;est pas disponible dans le portfolio.</p><Link className="button button-dark" to="/projets">Retour aux projets</Link></main>;
}

function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return <main className="inner-page page-width">
    <div className="page-intro">
      <span className="eyebrow">PROFIL · EXPÉRIENCE · FORMATION</span>
      <h1>Ingénierie logicielle<br/><span>et transmission.</span></h1>
      <p>{profile.title} basé à {profile.location}, je conçois des logiciels adaptés aux besoins, des API et des outils d’automatisation. Mon parcours associe développement logiciel, déploiement et formation en informatique.</p>
    </div>
    <div className="journey-layout">
      <div className="journey-main">
        <span className="eyebrow">EXPÉRIENCE</span>
        {experience.map((item, index) => <motion.article key={item.title} className="timeline-entry" initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.08 }}>
          <div className="timeline-date">{item.period}</div>
          <div><h2>{item.title}</h2><p className="entry-place">{item.organization}</p><p>{item.description}</p></div>
        </motion.article>)}
        <span className="eyebrow education-label">FORMATION</span>
        <article className="timeline-entry"><div className="timeline-date">2024</div><div><h2>Master I · Informatique de gestion</h2><p className="entry-place">ESPIC Madagascar</p></div></article>
        <article className="timeline-entry"><div className="timeline-date">2022</div><div><h2>Licence · Informatique de gestion</h2><p className="entry-place">ESPIC Madagascar</p></div></article>
        <article className="timeline-entry"><div className="timeline-date">2020</div><div><h2>DTS · Informatique de gestion</h2><p className="entry-place">ESPIC Madagascar</p></div></article>
      </div>
      <Card as="aside" className="skills-panel">
        <span className="eyebrow">DOMAINES & TECHNOLOGIES</span>
        <p>Des compétences mobilisées pour concevoir et livrer des logiciels.</p>
        <div className="skill-groups">{skillGroups.map((group) => <div key={group.title}>
          <h3>{group.title}</h3>
          <div className="skills-cloud">{group.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
        </div>)}</div>
        <div className="skills-note"><span>↗</span> L’automatisation est illustrée par Python Automation. L’IA reste un axe d’exploration et n’est pas présentée ici comme une compétence démontrée.</div>
      </Card>
    </div>
    <ContactBand/>
  </main>;
}
function CV() {
  return <main className="cv-page page-width inner-page"><div className="cv-toolbar"><span className="eyebrow">CURRICULUM VITAE · 2026</span><button className="button button-dark cv-print-button" type="button" onClick={() => window.print()}>Imprimer / Enregistrer en PDF</button></div><article className="cv-sheet"><header className="cv-heading"><p className="eyebrow">INGÉNIEUR LOGICIEL · FORMATEUR EN INFORMATIQUE</p><h1>{profile.name}<br/><span>RAKOTOMAMONJY</span></h1><p>Conception et développement d’applications web et mobiles, d’API backend et d’outils d’automatisation.</p><div className="cv-contact"><a href="mailto:fred.avotra@gmail.com">fred.avotra@gmail.com</a><a href="tel:+261325608838">+261 32 56 088 38</a><span>{profile.location}</span><a href="https://github.com/Avotra-frederic" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/avotra-frederic" target="_blank" rel="noreferrer">LinkedIn</a></div></header><section className="cv-section"><h2>Expérience</h2><article><div className="cv-entry-head"><h3>Formateur en informatique</h3><span>2022 – aujourd’hui</span></div><p className="cv-place">Joyce &amp; Hope Formation</p><p>Conception et animation de cours en développement et algorithmique; accompagnement des apprenants dans la réalisation de leurs projets.</p></article><article><div className="cv-entry-head"><h3>Développeur PHP · Stage</h3><span>2021</span></div><p className="cv-place">SmartOne Madagascar</p><p>Développement de Plan Sol, une application web de gestion et de suivi de parc informatique avec Laravel, Livewire et PostgreSQL.</p></article></section><section className="cv-section"><h2>Projets sélectionnés</h2><article><div className="cv-entry-head"><h3>ShopInMada · Ingénieur logiciel</h3><span>2025–2026</span></div><p>Marketplace pour les boutiques locales : développement backend et API, modernisation de l’interface, intégrations et déploiement Docker sur VPS avec GitHub Actions. Collaboration avec RAFANOMEZANTSOA Jean Augustin, développeur frontend.</p></article><article><div className="cv-entry-head"><h3>HadiPharma · Ingénieur logiciel</h3><span>Mai – juillet 2026</span></div><p>Projet client web et mobile pour rechercher des pharmacies et des médicaments disponibles, avec gestion des commandes, stocks, équipes et abonnements. Développé individuellement, du frontend au backend, avec adaptation Android et échanges en temps réel.</p></article><article><div className="cv-entry-head"><h3>Category API · Développeur backend</h3><span>2025–2026</span></div><p>API REST Node.js et Express pour gérer un catalogue hiérarchique de catégories avec MongoDB.</p></article><article><div className="cv-entry-head"><h3>Python Automation</h3><span>2026</span></div><p>Scripts Python d’automatisation, dont un générateur de classeur Excel à partir de photos.</p></article></section><section className="cv-section"><h2>Formation</h2><article><div className="cv-entry-head"><h3>Master I · Informatique de gestion</h3><span>2024</span></div><p className="cv-place">ESPIC Madagascar</p></article><article><div className="cv-entry-head"><h3>Licence · Informatique de gestion</h3><span>2022</span></div><p className="cv-place">ESPIC Madagascar</p></article><article><div className="cv-entry-head"><h3>DTS · Informatique de gestion</h3><span>2020</span></div><p className="cv-place">ESPIC Madagascar</p></article></section><section className="cv-section"><h2>Compétences</h2><p><strong>Frontend :</strong> React, TypeScript, JavaScript, Vite, Tailwind CSS, Capacitor, Ionic<br/><strong>Backend :</strong> Node.js, Express, PHP, Laravel, API REST<br/><strong>Données :</strong> MongoDB, Mongoose, PostgreSQL<br/><strong>Livraison :</strong> Docker, Docker Compose, GitHub Actions, Nginx, VPS<br/><strong>Automatisation :</strong> Python, openpyxl</p></section></article></main>;
}

function ContactBand() { return <section className="contact-band"><div><span className="eyebrow">UNE ID&Eacute;E &Agrave; CONSTRUIRE ?</span><h2>Parlons-en.</h2><p>Ouvert aux &eacute;changes, collaborations et nouvelles opportunit&eacute;s.</p></div><Link className="contact-circle" to="/contact" aria-label="Ouvrir la page Contact"><LiaArrowRightSolid/></Link></section>; }

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    if (!name || !email || !subject || message.length < 10) {
      setStatus("Vérifiez les champs et saisissez un message d’au moins 10 caractères.");
      return;
    }
    const body = encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\n\n${message}`);
    window.location.href = `mailto:fred.avotra@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Votre application e-mail va s’ouvrir avec le message préparé.");
  }

  return <main className="inner-page page-width contact-page">
    <div className="page-intro"><span className="eyebrow">CONTACT · {profile.location.toUpperCase()}</span><h1>La prochaine bonne idée<br/><span>commence par bonjour.</span></h1><p>Vous avez un projet, une opportunité ou envie d’échanger autour du développement ? Écrivez-moi.</p></div>
    <a className="email-link" href="mailto:fred.avotra@gmail.com">fred.avotra@gmail.com <LiaArrowRightSolid/></a>
    <div className="contact-layout">
      <Card className="contact-form-card"><h2>Envoyer un message</h2><p>Le formulaire prépare un e-mail dans votre application de messagerie.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field"><label htmlFor="contact-name">Nom</label><input id="contact-name" name="name" autoComplete="name" required minLength={2}/></div>
          <div className="form-field"><label htmlFor="contact-email">Adresse e-mail</label><input id="contact-email" name="email" type="email" autoComplete="email" required/></div>
          <div className="form-field"><label htmlFor="contact-subject">Sujet</label><input id="contact-subject" name="subject" required minLength={3}/></div>
          <div className="form-field form-field-full"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} required minLength={10}/></div>
          <button className="button button-dark" type="submit">Préparer mon e-mail <LiaArrowRightSolid/></button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </Card>
      <div className="contact-links"><a href="https://github.com/Avotra-frederic" target="_blank" rel="noreferrer">GitHub <LiaExternalLinkAltSolid/></a><a href="https://linkedin.com/in/avotra-frederic" target="_blank" rel="noreferrer"><LiaLinkedin/> LinkedIn <LiaExternalLinkAltSolid/></a><a href="mailto:fred.avotra@gmail.com"><LiaEnvelopeSolid/> E-mail <LiaExternalLinkAltSolid/></a><a href="tel:+261325608838"><LiaPhoneSolid/> +261 32 56 088 38</a><span className="contact-location"><LiaMapMarkerSolid/> {profile.location}</span></div>
    </div>
  </main>;
}
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      else window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => { document.documentElement.dataset.theme = theme; document.documentElement.classList.toggle("dark", theme === "dark"); document.querySelector("meta[name=theme-color]")?.setAttribute("content", theme === "dark" ? "#151a17" : "#f6f6f2"); localStorage.setItem("portfolio-theme", theme); }, [theme]);
  return <div className="app-shell"><SEO/><ScrollToTop/><Header theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}/><LazyMotion features={domAnimation}><Routes><Route path="/" element={<Home/>}/><Route path="/projets" element={<Projects/>}/><Route path="/projets/:slug" element={<ProjectDetail/>}/><Route path="/parcours" element={<Journey/>}/><Route path="/cv" element={<CV/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></LazyMotion><Footer/></div>;
}
export default App;
