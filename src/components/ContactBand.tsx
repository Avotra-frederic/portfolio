import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <span className="eyebrow">UNE ID&Eacute;E &Agrave; CONSTRUIRE ?</span>
        <h2>Parlons-en.</h2>
        <p>
          Ouvert aux &eacute;changes, collaborations et nouvelles
          opportunit&eacute;s.
        </p>
      </div>
      <Link
        className="contact-circle"
        to="/contact"
        aria-label="Ouvrir la page Contact"
      >
        <LiaArrowRightSolid />
      </Link>
    </section>
  );
}
