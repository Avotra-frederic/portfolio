import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { profile } from "../data/profile";

function updateMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname.startsWith("/projets/") ? pathname.slice("/projets/".length) : "";
    const project = slug ? getProjectBySlug(slug) : undefined;
    const title = project ? `${project.title} — ${profile.name}` : `${profile.name} — ${profile.title}`;
    const description = project?.summary ?? profile.seoDescription;

    document.title = title;
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
  }, [pathname]);

  return null;
}
