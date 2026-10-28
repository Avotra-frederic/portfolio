import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="page-width not-found">
      <span className="eyebrow">404</span>
      <h1>Projet introuvable</h1>
      <p>Ce projet n&#39;est pas disponible dans le portfolio.</p>
      <Link className="button button-dark" to="/projets">
        Retour aux projets
      </Link>
    </main>
  );
}
