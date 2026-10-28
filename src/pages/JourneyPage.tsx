import { m as motion, useReducedMotion } from "framer-motion";
import { Badge, Card } from "../components/ui";
import ContactBand from "../components/ContactBand";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="inner-page page-width">
      <div className="page-intro">
        <span className="eyebrow">PROFIL · EXPÉRIENCE · FORMATION</span>
        <h1>
          Ingénierie logicielle
          <br />
          <span>et transmission.</span>
        </h1>
        <p>
          {profile.title} basé à {profile.location}, je conçois des logiciels
          adaptés aux besoins, des API et des outils d’automatisation. Mon
          parcours associe développement logiciel, déploiement et formation en
          informatique.
        </p>
      </div>
      <div className="journey-layout">
        <div className="journey-main">
          <span className="eyebrow">EXPÉRIENCE</span>
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              className="timeline-entry"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
            >
              <div className="timeline-date">{item.period}</div>
              <div>
                <h2>{item.title}</h2>
                <p className="entry-place">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
          <span className="eyebrow education-label">FORMATION</span>
          {education.map((entry) => (
            <article className="timeline-entry" key={entry.degree}>
              <div className="timeline-date">{entry.year}</div>
              <div>
                <h2>{entry.degree}</h2>
                <p className="entry-place">{entry.institution}</p>
              </div>
            </article>
          ))}
        </div>
        <Card as="aside" className="skills-panel">
          <span className="eyebrow">DOMAINES & TECHNOLOGIES</span>
          <p>
            Des compétences mobilisées pour concevoir et livrer des logiciels.
          </p>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <div className="skills-cloud">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skills-note">
            <span>↗</span> L’automatisation est illustrée par Python Automation.
            L’IA reste un axe d’exploration et n’est pas présentée ici comme une
            compétence démontrée.
          </div>
        </Card>
      </div>
      <ContactBand />
    </main>
  );
}
