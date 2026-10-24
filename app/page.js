import Header, { ModeLink } from "@/components/Header";
import Search from "@/components/Search";
import { ContactForm, Newsletter } from "@/components/ContactForm";
import { ACTUS } from "@/data/biens";

const SERVICES = [
  ["🔑", "Location", "Appartements, maisons de village, bureaux : des offres variées toute l’année, avec des visites réactives.", "rent", "#biens", "Voir les locations →"],
  ["🏡", "Vente", "Premier achat, investissement ou déménagement : nous accompagnons vendeur et acquéreur à chaque étape.", "sell", "#biens", "Voir les ventes →"],
  ["📋", "Gestion locative", "Sélection des locataires, suivi des travaux, comptabilité : un service modulable selon vos souhaits.", null, "#contact", "Demander un devis →"],
];
const CHECKS = [
  "Le cadre juridique des transactions et des locations",
  "Le secteur : Précy-sur-Oise, Creil, L’Isle-Adam et alentours",
  "Le marché de l’immobilier local",
  "La fiscalité applicable selon votre situation",
];
const STATS = [["1980", "année de création"], ["12", "villes couvertes"], ["3", "métiers : louer, vendre, gérer"], ["5 j/7", "ouvert du lundi au vendredi"]];

export default function Home() {
  return (
    <>
      <div className="top"><div className="wrap"><span>14 rue Gaston Wateau · 60460 Précy-sur-Oise</span><a href="tel:+33344276344">03 44 27 63 44</a></div></div>
      <Header />
      <main id="top">
        <div className="hero"><div className="wrap">
          <span className="badge">Depuis 1980 · Précy-sur-Oise</span>
          <h1>Trouvez le bien qui vous ressemble.</h1>
          <p>Location, vente et gestion locative : une agence de proximité qui traite votre bien comme le sien.</p>
        </div></div>

        <Search />

        <section className="alt" id="services"><div className="wrap">
          <div className="eyebrow">Nos services</div>
          <h2 className="sec-h">Un accompagnement à chaque étape</h2>
          <p className="lead">Que vous cherchiez, vendiez ou confiiez la gestion de votre bien, un interlocuteur unique vous suit de A à Z.</p>
          <div className="grid">
            {SERVICES.map(([ic, h, p, mode, href, link]) => (
              <div className="card svc" key={h}>
                <div className="ic" aria-hidden="true">{ic}</div><h3>{h}</h3><p>{p}</p>
                {mode ? <ModeLink mode={mode} href={href}>{link}</ModeLink> : <a href={href}>{link}</a>}
              </div>
            ))}
          </div>
        </div></section>

        <section><div className="wrap two">
          <div>
            <div className="eyebrow">Pourquoi nous</div>
            <h2 className="sec-h">Un cabinet de confiance</h2>
            <p className="lead" style={{ marginBottom: 0 }}>Notre agence à taille humaine s’appuie sur de solides compétences, pour que vous puissiez nous laisser vos clés sans inquiétude.</p>
            <ul className="checks">{CHECKS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="stats">{STATS.map(([b, s]) => <div className="stat" key={b}><b>{b}</b><span>{s}</span></div>)}</div>
        </div></section>

        <section className="alt" id="actus"><div className="wrap">
          <div className="eyebrow">Actualités</div>
          <h2 className="sec-h">Nouveautés immobilières</h2>
          <p className="lead"></p>
          <div className="grid">
            {ACTUS.map(([d, t]) => (
              <article className="card news" key={t}><time>{d}</time><h3>{t}</h3><a href="#actus">Savoir plus →</a></article>
            ))}
          </div>
        </div></section>

        <section className="contact" id="contact"><div className="wrap two">
          <div><h2 className="sec-h">Nous écrire</h2><p className="lead">Une question, un projet, une visite à organiser ? Nous vous répondons rapidement.</p><ContactForm /></div>
          <div><h2 className="sec-h">Newsletter</h2><p className="lead">Recevez nos nouvelles annonces en avant-première.</p><Newsletter /></div>
        </div></section>
      </main>

      <footer><div className="wrap">
        <div className="cols">
          <div className="logo"><b>C<i>|</i>L</b><small>Cabinet Immobilier Lejeune</small></div>
          <div><h4>Nous rendre visite</h4><p>14 rue Gaston Wateau<br />60460 Précy-sur-Oise<br />Du lundi au vendredi, 9h–12h et 14h–18h</p></div>
          <div><h4>Contact</h4><p><a href="tel:+33344276344">03 44 27 63 44</a><br /><a href="mailto:contact@lejeuneimmobilier.fr">contact@lejeuneimmobilier.fr</a><br />
            <a href="https://www.openstreetmap.org/search?query=14%20rue%20Gaston%20Wateau%20Pr%C3%A9cy-sur-Oise" target="_blank" rel="noopener noreferrer">Voir sur la carte ↗</a></p></div>
        </div>
        <div className="legal"><span>Mentions légales · Paramètres cookies</span><span>Maquette de redesign à but d’exercice. Annonces et visuels fictifs.</span></div>
      </div></footer>
    </>
  );
}
