import { useState } from "react";
import type { FormEvent } from "react";
import {
  LiaArrowRightSolid,
  LiaEnvelopeSolid,
  LiaExternalLinkAltSolid,
  LiaLinkedin,
  LiaMapMarkerSolid,
  LiaPhoneSolid,
} from "react-icons/lia";
import { Button, Card } from "../components/ui";
import { profile } from "../data/profile";
import { contactInfo } from "../data/contact";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "")
      .replace(/[\r\n]+/g, " ")
      .trim();
    const message = String(values.get("message") ?? "").trim();
    if (
      name.length < 2 || name.length > 100 ||
      email.length > 254 ||
      subject.length < 3 || subject.length > 160 ||
      message.length < 10 || message.length > 5000
    ) {
      setStatus(
        "Vérifiez les champs et saisissez un message d’au moins 10 caractères.",
      );
      return;
    }
    const body = encodeURIComponent(
      `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Votre application e-mail va s’ouvrir avec le message préparé.");
  }

  return (
    <main className="inner-page page-width contact-page">
      <div className="page-intro">
        <span className="eyebrow">
          CONTACT · {profile.location.toUpperCase()}
        </span>
        <h1>
          La prochaine bonne idée
          <br />
          <span>commence par bonjour.</span>
        </h1>
        <p>
          Vous avez un projet, une opportunité ou envie d’échanger autour du
          développement ? Écrivez-moi.
        </p>
      </div>
      <a className="email-link" href={`mailto:${contactInfo.email}`}>
        {contactInfo.email} <LiaArrowRightSolid />
      </a>
      <div className="contact-layout">
        <Card className="contact-form-card">
          <h2>Envoyer un message</h2>
          <p>
            Le formulaire prépare un e-mail dans votre application de
            messagerie.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Nom</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Adresse e-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Sujet</label>
              <input
                id="contact-subject"
                name="subject"
                required
                minLength={3}
                maxLength={160}
              />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={5000}
              />
            </div>
            <Button className="button-dark" type="submit">
              Préparer mon e-mail <LiaArrowRightSolid />
            </Button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </Card>
        <div className="contact-links">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <LiaExternalLinkAltSolid />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaLinkedin /> LinkedIn <LiaExternalLinkAltSolid />
          </a>
          <a href={`mailto:${contactInfo.email}`}>
            <LiaEnvelopeSolid /> E-mail <LiaExternalLinkAltSolid />
          </a>
          <a href={`tel:${contactInfo.phoneHref}`}>
            <LiaPhoneSolid /> {contactInfo.phone}
          </a>
          <span className="contact-location">
            <LiaMapMarkerSolid /> {profile.location}
          </span>
        </div>
      </div>
    </main>
  );
}
