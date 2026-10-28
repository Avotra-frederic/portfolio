import { LiaExternalLinkAltSolid } from "react-icons/lia";
import type { Project } from "../../types/project";

interface ProjectLinkListProps {
  project: Project;
  variant: "actions" | "facts";
}

export function ProjectLinkList({ project, variant }: ProjectLinkListProps) {
  const links: { href: string; label: string; className: string }[] = [];

  if (project.links.live) {
    links.push({
      href: project.links.live,
      label: "Voir le site",
      className: variant === "actions" ? "button button-dark" : "",
    });
  }
  if (project.links.github) {
    links.push({
      href: project.links.github,
      label: "Code source",
      className: variant === "actions" ? "button button-outline" : "",
    });
  }

  return (
    <div className={variant === "actions" ? "detail-actions" : "facts-links"}>
      {links.map((link) => (
        <a
          key={link.href}
          className={link.className}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} <LiaExternalLinkAltSolid />
        </a>
      ))}
    </div>
  );
}
