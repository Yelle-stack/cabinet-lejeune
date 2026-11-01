import Link from "next/link";

export const metadata = {
  title: "Gestion locative | Cabinet Immobilier Lejeune",
  description: "Confiez la gestion de votre bien à l’agence : sélection des locataires, suivi des travaux, comptabilité.",
};

const SERVICES = [
  ["Sélection des locataires", "Recherche, étude des dossiers et choix du locataire adapté à votre bien."],
  ["Baux et états des lieux", "Rédaction du bail, état des lieux d’entrée et de sortie."],
  ["Loyers et comptabilité", "Encaissement des loyers, quittances et suivi comptable."],
  ["Travaux et entretien", "Engagement des frais de travaux et suivi des interventions."],
];

const POINTS = [
  "Un service modulable selon vos souhaits",
  "Un interlocuteur unique dans votre agence de proximité",
  "Un suivi régulier de votre bien et de vos revenus locatifs",
];

export default function GestionLocative() {
  return (
    <main className="wrap detail">
      <Link href="/" className="back">← Retour à l’accueil</Link>

      <div className="eyebrow">Gestion locative</div>
      <h1 className="sec-h">Gestion locative sur mesure</h1>
      <p className="lead">
        Sélection des locataires, travaux, suivi comptable : oubliez les tracas liés à la mise en location de votre bien.
      </p>

      <div className="grid">
        {SERVICES.map(([titre, texte]) => (
          <div className="card svc" key={titre}>
            <h3>{titre}</h3>
            <p>{texte}</p>
          </div>
        ))}
      </div>

      <ul className="checks" style={{ margin: "32px 0" }}>
        {POINTS.map((p) => <li key={p}>{p}</li>)}
      </ul>

      <Link href="/#contact" className="btn">Demander un devis</Link>
    </main>
  );
}