import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { SEO } from "./components/SEO";
import SiteFooter from "./components/layouts/SiteFooter";
import SiteHeader from "./components/layouts/SiteHeader";
import type { Theme } from "./types/theme";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const JourneyPage = lazy(() => import("./pages/JourneyPage"));
const CVPage = lazy(() => import("./pages/CVPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash)
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        });
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
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", theme === "dark" ? "#151a17" : "#f6f6f2");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  return (
    <div className="app-shell">
      <SEO />
      <ScrollToTop />
      <SiteHeader
        theme={theme}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <LazyMotion features={domAnimation}>
        <Suspense fallback={<main className="page-width inner-page" aria-live="polite">Chargement…</main>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/projets/:slug" element={<ProjectDetailPage />} />
            <Route path="/parcours" element={<JourneyPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </LazyMotion>
      <SiteFooter />
    </div>
  );
}

export default App;
