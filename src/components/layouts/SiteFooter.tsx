import { Link } from "react-router-dom";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { profile } from "../../data/profile";
import { contactInfo } from "../../data/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>
        © 2025–{new Date().getFullYear()} {profile.name}
      </span>
      <span>Conçu et développé à {profile.location}</span>
      <span className="footer-socials">
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
      </span>
    </footer>
  );
}
