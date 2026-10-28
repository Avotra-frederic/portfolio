import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LiaArrowRightSolid,
  LiaBarsSolid,
  LiaMoonSolid,
  LiaSunSolid,
  LiaTimesSolid,
} from "react-icons/lia";
import { profile } from "../../data/profile";
import { contactInfo } from "../../data/contact";
import type { Theme } from "../../types/theme";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const links = [
    ["Accueil", "/"],
    ["À propos", "/#apropos"],
    ["Projets", "/projets"],
    ["Parcours", "/parcours"],
    ["CV", "/cv"],
    ["Contact", "/contact"],
  ] as const;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    const updateActiveSection = () => {
      const current =
        ["apropos", "projets"].find((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          const bounds = section.getBoundingClientRect();
          return (
            bounds.top <= window.innerHeight * 0.45 &&
            bounds.bottom > window.innerHeight * 0.3
          );
        }) ?? "";
      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label={profile.name + " — accueil"}>
        <span className="wordmark-mark">
          AF<span>.</span>
        </span>
        <span className="wordmark-name">{profile.name}</span>
      </a>
      <nav
        id="primary-navigation"
        className={"main-nav" + (mobileOpen ? " mobile-open" : "")}
        aria-label="Navigation principale"
      >
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => {
              const active =
                path === "/"
                  ? isActive && !activeSection
                  : path === "/#apropos"
                    ? location.pathname === "/" && activeSection === "apropos"
                    : path === "/projets"
                      ? isActive ||
                        (location.pathname === "/" &&
                          activeSection === "projets")
                      : isActive;
              return active ? "nav-link active" : "nav-link";
            }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={
          "Activer le thème " + (theme === "light" ? "sombre" : "clair")
        }
        title={"Thème " + (theme === "light" ? "sombre" : "clair")}
      >
        {theme === "light" ? <LiaMoonSolid /> : <LiaSunSolid />}
      </button>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {mobileOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}
      </button>
      <a className="header-cta" href={`mailto:${contactInfo.email}`}>
        Parlons de votre projet <LiaArrowRightSolid />
      </a>
    </header>
  );
}
